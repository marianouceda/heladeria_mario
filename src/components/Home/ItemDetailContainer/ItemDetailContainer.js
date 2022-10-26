import "./ItemDetailContainer.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";


function ItemDetailContainer({ id, name, description, price, category }) {
  return (
    
    <Card className='card' style={{ width: '18rem' }}>
      <Link to={`product/${id}`}>
      <Card.Img variant="top" src="holder.js/100px180" />
      
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {category}
          <br/>
          <br/>
          {`$ ${price}`}
          <br/>
          <br/>
          {description}
        </Card.Text>
        
      </Card.Body>
      </Link>
      <Button variant="primary">Agregar al carrito</Button>
    </Card>
  );
}

export default ItemDetailContainer;