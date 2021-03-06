import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { string } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { searchMeal } from '../../actions/meals';
import { searchDrink } from '../../actions/drinks';

function SearchBar(props) {
  const { type } = props;
  const [searchText, setSearchText] = useState('');
  const [radioOption, setRadioOption] = useState('ingredient');
  const dispatch = useDispatch();
  const cards = useSelector((state) => state[type][type]);
  const history = useHistory();

  useEffect(() => {
    if (cards.length === 0) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.'); // eslint-disable-line
    }
  }, [cards]);

  const [searchStatus, setSearchStatus] = useState(false);

  useEffect(() => {
    if (cards.length === 1 && searchStatus && type === 'meals') {
      history.push(`/comidas/${cards[0].idMeal}`);
    }
    if (cards.length === 1 && searchStatus && type === 'drinks') {
      history.push(`/bebidas/${cards[0].idDrink}`);
    }
    setSearchStatus(false);
  }, [cards]); // eslint-disable-line

  const searchRecipe = () => {
    if (radioOption === 'first-letter' && searchText.length !== 1) {
      alert('Sua busca deve conter somente 1 (um) caracter'); // eslint-disable-line
    } else {
      if (type === 'meals') dispatch(searchMeal(searchText, radioOption));
      if (type === 'drinks') dispatch(searchDrink(searchText, radioOption));
      setSearchStatus(true);
      setSearchText('');
    }
  };

  return (
    <Container>
      <Row>
        <input
          data-testid="search-input"
          type="text"
          placeholder="Buscar receita"
          value={ searchText }
          onChange={ ({ target: { value } }) => setSearchText(value) }
        />
      </Row>
      <Row>
        <Col>
          <label htmlFor="ingredient">
            <input
              data-testid="ingredient-search-radio"
              id="ingredient"
              type="radio"
              value="ingredient"
              name="search-options"
              onChange={ () => setRadioOption('ingredient') }
              defaultChecked
            />
            Ingredientes
          </label>
        </Col>
        <Col>
          <label htmlFor="name">
            <input
              data-testid="name-search-radio"
              id="name"
              type="radio"
              value="name"
              name="search-options"
              onChange={ () => setRadioOption('name') }
            />
            Nome
          </label>
        </Col>
        <Col>
          <label htmlFor="first-letter">
            <input
              data-testid="first-letter-search-radio"
              id="first-letter"
              type="radio"
              value="first-letter"
              name="search-options"
              onChange={ () => setRadioOption('first-letter') }
            />
            Primeira letra
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <button
            data-testid="exec-search-btn"
            type="button"
            onClick={ () => searchRecipe() }
          >
            Buscar
          </button>
        </Col>
      </Row>
    </Container>
  );
}

SearchBar.propTypes = {
  type: string,
}.isRequired;

export default SearchBar;
