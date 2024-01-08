import React from 'react'
import Titre from './Titre'

const Formation = () => {
    return (

        <div className='formation '>
            <Titre id="formation" titre="Formation" />
            <div className='formation-container '>

                <ul>
                    <li className='formation-content'>

                        <a href='https://openclassrooms.com/'>
                            <img src="https://cdn.livestorm.co/uploads/organization/avatar/14eba3f5-b2bb-4ac9-bfc3-589dd3d18d26/size_120x120_94337e9e-9e0d-4efe-b0c3-3043bb34bba4.png?v=1700244119"></img>
                        </a>
                        <div className='formation-content-p'>
                            <a href='https://openclassrooms.com/'>OPENCLASSROOMS</a>
                            <p>Formation : Développeur Web</p>
                            
                            <p>2023-2024 : Diplôme de niveau 5 (bac +2)</p>

                        </div>
                    </li>


                </ul>
            </div>
        </div>

    )
}

export default Formation
