import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import swal from 'sweetalert';

function FormulaCuadratica() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!a || !b || !c) {
      swal('Error', 'Por favor completa todos los campos.', 'error');
      return;
    }

 
    const discriminante = b * b - 4 * a * c;
    if (discriminante < 0) {
      swal('Resultado', 'No hay raíces reales.', 'info');
    } else {
      const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
      swal('Resultado', `Raíces: ${raiz1}, ${raiz2}`, 'success');
    }
  };

  return (
    <div className="p-3 mb-2 bg-danger bg-gradient text-white rounded-5">
        
       <Form onSubmit={handleSubmit}
       
    style={{
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center', 
        height: '100vh', 
  }}
  >
    <h1>Calculadora Formula Cuadratica</h1>
      <Form.Group controlId="a">
        <Form.Label>Ingresa el valor a:</Form.Label>
        <Form.Control
          type="number"
          placeholder="valor de a"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="b">
        <Form.Label>Ingresa el valor de b:</Form.Label>
        <Form.Control
          type="number"
          placeholder="valor de b"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="c">
        <Form.Label>Ingresa el valor de c:</Form.Label>
        <Form.Control
          type="number"
          placeholder="valor de c"
          value={c}
          onChange={(e) => setC(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit" >
        Resolver Cuadratica
      </Button>
    </Form>
    </div>
  );
  
}

export default FormulaCuadratica;
