import React from 'react'
import { Chip } from '@material-ui/core';

export default function WordDetails({word, index, availableColors}) {
    return (
        <>
            <div className="word-meaning">
                <div style={{fontWeight: 'bolder'}} className={availableColors[index%6] + "-color" }>
                    Synonyms
                </div>
                <ul style={{position: 'relative'}}>
                {
                    (word.synonyms).map(syn => (
                        <li style={{position: 'relative'}}>
                            {syn}
                        </li>
                    ))
                }
                </ul>
            </div>

            <div className="word-meaning">
                <div style={{fontWeight: 'bolder'}} className={availableColors[index%6] + "-color" }>
                    Meanings
                </div>
                <ul style={{position: 'relative'}}>
                {
                    (word.meanings).map(meaning => (
                        <li style={{position: 'relative'}}>
                            {meaning}
                        </li>
                    ))
                }
                </ul>
            </div>

            <div className="word-meaning">
                <div style={{fontWeight: 'bolder'}} className={availableColors[index%6] + "-color" }>
                    Examples
                </div>
                <ul style={{position: 'relative'}}>
                {
                    (word.examples).map(example => (
                        <li style={{position: 'relative'}}>
                            {example}
                        </li>
                    ))
                }
                </ul>
            </div>
            
            <div className="word-meaning" style={{paddingBottom: '10px'}}>
                <div style={{fontWeight: 'bolder'}} className={availableColors[index%6] + "-color" }>
                    Tags
                </div>
                {
                    (word.tags).map(tag => (
                        <Chip 
                            color="secondary"
                            label={tag}
                            style={{cursor: 'pointer', margin: '5px'}}
                        />
                    ))
                }
            </div>
        </>
    )
}
