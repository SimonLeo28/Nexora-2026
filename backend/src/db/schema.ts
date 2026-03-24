import {
  pgTable,
  serial,
  text,
  timestamp,
  integer,
  pgEnum,
  boolean,
} from 'drizzle-orm/pg-core';

// ─── Enums ────────────────────────────────────────────────────────────────────

export const paymentStatusEnum = pgEnum('payment_status', [
  'pending',
  'paid',
  'failed',
  'refunded',
]);

export const teamStatusEnum = pgEnum('team_status', [
  'registered',
  'confirmed',
  'disqualified',
  'withdrawn',
]);

// ─── Teams ────────────────────────────────────────────────────────────────────
// Core team record. One team has one leader and up to 3 members.

export const teams = pgTable('teams', {
  id: serial('id').primaryKey(),
  teamName: text('team_name').notNull(),
  collegeName: text('college_name').notNull(),
  theme: text('theme').default('not_selected'),
  status: teamStatusEnum('status').default('registered').notNull(),
  paymentStatus: paymentStatusEnum('payment_status').default('pending').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// ─── Team Leaders ─────────────────────────────────────────────────────────────

export const teamLeaders = pgTable('team_leaders', {
  id: serial('id').primaryKey(),
  teamId: integer('team_id')
    .notNull()
    .references(() => teams.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  phone: text('phone').notNull(),
  department: text('department').notNull(),
  year: text('year').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// ─── Team Members ─────────────────────────────────────────────────────────────

export const teamMembers = pgTable('team_members', {
  id: serial('id').primaryKey(),
  teamId: integer('team_id')
    .notNull()
    .references(() => teams.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  phone: text('phone').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// ─── Payments ─────────────────────────────────────────────────────────────────

export const payments = pgTable('payments', {
  id: serial('id').primaryKey(),
  teamId: integer('team_id')
    .notNull()
    .references(() => teams.id, { onDelete: 'cascade' }),
  amount: integer('amount').notNull().default(0), // store in smallest currency unit (paise)
  transactionId: text('transaction_id').unique(),
  status: paymentStatusEnum('status').default('pending').notNull(),
  paymentMethod: text('payment_method'), // 'upi', 'card', 'netbanking', etc.
  notes: text('notes'),
  paidAt: timestamp('paid_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// ─── Admin Sessions (optional audit trail) ────────────────────────────────────

export const adminLogs = pgTable('admin_logs', {
  id: serial('id').primaryKey(),
  action: text('action').notNull(),
  details: text('details'),
  ipAddress: text('ip_address'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// ─── Type Exports ─────────────────────────────────────────────────────────────

export type Team = typeof teams.$inferSelect;
export type NewTeam = typeof teams.$inferInsert;

export type TeamLeader = typeof teamLeaders.$inferSelect;
export type NewTeamLeader = typeof teamLeaders.$inferInsert;

export type TeamMember = typeof teamMembers.$inferSelect;
export type NewTeamMember = typeof teamMembers.$inferInsert;

export type Payment = typeof payments.$inferSelect;
export type NewPayment = typeof payments.$inferInsert;
