import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
} from 'react-icons/bs';

import './Thanks.css';

const emojiData = {
    unsatified: <BsFillEmojiFrownFill />,
    neutral: <BsFillEmojiNeutralFill />,
    satisfied: <BsFillEmojiSmileFill />,
    very_satisfied: <BsFillEmojiHeartEyesFill />
}

export const Thanks = ({ data }) => {
    return(
        <div className='thanks-container'>
            <h2>Falta Pouco...</h2>
            <p>A sua opiniao e muito importante</p>
            <p>Para concluir a sua avaliacao clique no botao abaixo.</p>
            <h3>Aqui esta a sua avaliacao: {data.name}</h3>
            <p className="review-data">
                <span>Satisfacao com o produto:</span>
                {emojiData[data.review]}
            </p>
            <p className="review-data">
                <span>Comentario: </span>
                {data.comment}
            </p>
        </div>
    )
};

