import TilsynModel from "../TilsynModel";

type GridProps = {
    cards: TilsynModel[];
  };

function ResultCards({cards}: GridProps){

    const cardElements = cards.map((cardData) => {
        return(
            <div key={cardData.entries.sakref}>
                {cardData.entries.navn}
                hei
            </div>
        )
    })

    return(
        <div>
           {cardElements} 
        </div>
    )
}

export default ResultCards;