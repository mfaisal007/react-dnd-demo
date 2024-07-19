import update from 'immutability-helper';
import { useCallback, useState } from 'react';
import PostsItem from './PostsItem';

const style = {
  width: 400,
};
const Posts = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: 'Write a cool JS library',
        order: 54,
      },
      {
        id: 2,
        text: 'Make it generic enough',
        order: 55,
      },
      {
        id: 3,
        text: 'Write README',
        order: 56,
      },
      {
        id: 4,
        text: 'Create some examples',
        order: 57,
      },
      {
        id: 5,
        text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
        order: 58,
      },
      {
        id: 6,
        text: '???',
        order: 59,
      },
      {
        id: 7,
        text: 'PROFIT',
        order: 60,
      },
    ]);

    const moveCard = useCallback((dragIndex, hoverIndex) => {
      setCards((prevCards) => {
        // Clone the previous state to avoid mutating it directly
        const updatedCards = [...prevCards];

        // Remove the dragged card from its original position
        const [draggedCard] = updatedCards.splice(dragIndex, 1);

        // Insert the dragged card into the new position
        updatedCards.splice(hoverIndex, 0, draggedCard);

        // Update the order values based on the updated list order
        const sortedCards = updatedCards.map((card, index) => ({
          ...card,
          order: index + prevCards[0].order, // Start order from the initial order value
        }));

        return sortedCards;
      });
    }, []);

    const renderCard = useCallback((card, index) => {
      return (
        <PostsItem
          key={card.id}
          index={index}
          id={card.id}
          order={card.order}
          text={card.text}
          moveCard={moveCard}
        />
      );
    }, []);

    console.log('CARDS', cards);

    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    );
  }
};

export default Posts;
