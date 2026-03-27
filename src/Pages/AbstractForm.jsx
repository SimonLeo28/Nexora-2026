import { useState } from 'react';
import { apiFetch } from '../lib/api';

export default function AbstractForm() {
  const [form, setForm] = useState({
    teamId: '',
    title: '',
    description: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await apiFetch('/api/abstracts', {
      method: 'POST',
      body: JSON.stringify(form),
    });

    alert('Abstract submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Team ID" onChange={e => setForm({...form, teamId: e.target.value})} />
      <input placeholder="Title" onChange={e => setForm({...form, title: e.target.value})} />
      <textarea placeholder="Description" onChange={e => setForm({...form, description: e.target.value})} />
      <button type="submit">Submit</button>
    </form>
  );
}