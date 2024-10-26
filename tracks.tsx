import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Track {
  id: number;
  name: string;
  img: string;
  link: string;
}

const Tracks: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [newTrack, setNewTrack] = useState<Partial<Track>>({});
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchTracks();
  }, []);

  const fetchTracks = async () => {
    try {
      const response = await axios.get<Track[]>('http://localhost:5000/tracks');
      setTracks(response.data);
    } catch (error) {
      console.error('Ошибка при получении треков:', error);
    }
  };

  const addTrack = async () => {
    if (!file) {
      setMessage('Пожалуйста, выберите файл.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', newTrack.name || '');
    formData.append('img', newTrack.img || '');
    formData.append('link', newTrack.link || '');

    try {
      const response = await axios.post<{ id: number }>('http://localhost:5000/tracks', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setTracks([...tracks, { id: response.data.id, ...newTrack } as Track]);
      setNewTrack({});
      setFile(null); // Очистка файла
      setMessage('Трек добавлен успешно!');
    } catch (error) {
      console.error('Ошибка при добавлении трека:', error);
      setMessage('Ошибка при добавлении трека.');
    }
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div>
      <h1>Треки</h1>
      {message && <p>{message}</p>}
      <ul>
        {tracks.map(track => (
          <li key={track.id}>
            <img src={track.img} alt={track.name} />
            <p>{track.name}</p>
            <a href={track.link}>Слушать</a>
          </li>
        ))}
      </ul>
      <h2>Добавить трек</h2>
      <input
        type="text"
        placeholder="Название"
        value={newTrack.name || ''}
        onChange={e => setNewTrack({ ...newTrack, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Изображение"
        value={newTrack.img || ''}
        onChange={e => setNewTrack({ ...newTrack, img: e.target.value })}
      />
      <input
        type="text"
        placeholder="Ссылка"
        value={newTrack.link || ''}
        onChange={e => setNewTrack({ ...newTrack, link: e.target.value })}
      />
      <input
        type="file"
        accept="audio/*"
        onChange={e => setFile(e.target.files ? e.target.files[0] : null)}
      />
      <button onClick={addTrack}>Добавить трек</button>
    </div>
  );
};

export default Tracks;
