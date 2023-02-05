
import React, { useState } from 'react';
export default function EventsApp () {
    const [ myKeyInputs, setMyKeyInput ] = useState( {
        key: '',
        value: ''
    } );
    const [ keysToRender, setKeysToRender ] = useState( [] );

    function handleKeyInputPaste ( e ) {
        // e.preventDefault();
        let paste = e.clipboardData.getData('text');
        console.log( paste, 'The paste' );
        console.log( e, 'The paste event' );

    }

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='space-y-6'>
                <div>
                    <label className='block' htmlFor="keyName">Key Name</label>
                    <input className='border-2 border-slate-800' type="text" name='keyName' onPaste={handleKeyInputPaste} />
                </div>
                <div>
                    <label className='block' htmlFor="keyName">Key Value</label>
                    <input className='border-2 border-slate-800' type="text" name='keyValue' onPaste={e => {
                        console.log( e, 'The paste event key value input' );
                    }} />
                </div>
                <br />
                <br />
                <br />
                <div>
                    {keysToRender.length > 0 && keysToRender.map( ( { keyName, keyValue } ) => {
                        return (
                            <div key={keyName} className='flex gap-10'>
                                <h4>{keyName}</h4>
                                <p>{keyValue}</p>
                            </div>
                        );
                    } )}
                </div>
            </div>

        </div>
    );
}




