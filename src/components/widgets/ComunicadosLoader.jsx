import React, { useState, useEffect } from 'react';
import { obtenerComunicados } from '../../obtenerComunicados.js';

const ComunicadosLoader = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await obtenerComunicados();
        console.log('Datos cargados:', data);
        setItems(data);
      } catch (error) {
        console.error("Error fetching comunicados:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <p>Cargando...</p>; // Puedes personalizar esto según tus necesidades
  }

  return children(items);
};

export default ComunicadosLoader;
