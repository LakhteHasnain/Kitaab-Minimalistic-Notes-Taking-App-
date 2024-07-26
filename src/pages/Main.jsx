import React, { useState } from 'react';
import NoteCard from '../components/card';
import Head from '../components/Head2';
import Content from '../components/content';

export default function Main() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Head onSearch={handleSearch} />
      <Content searchQuery={searchQuery} />
    </div>
  );
}
