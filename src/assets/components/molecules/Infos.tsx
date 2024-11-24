import React from 'react';


const Infos : React.FC = () => {
    return (
        <div className=''>
            <h1 className='text-2xl text-center font-semibold mb-2'>Company Logo</h1>
            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, deserunt maiores</p>
            <br />
            <ul>
                <li>ID: alan@alan.fr</li>
                <li>MDP: pass_1234</li>
            </ul>
        </div>
        
    );
};

export default Infos;