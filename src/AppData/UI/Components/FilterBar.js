import React from 'react'

import { FaFilter } from 'react-icons/fa';

import { APP_COLOR, FILTER } from '../../Data/Utility/Strings';

const FilterBar = () => {
  return (
    <div className='h-8  w-full flex flex-row items-center justify-end px-4'>
        <div className='flex flex-row items-center w-full justify-end'>
            <div className='flex flex-row items-center  mx-2'>
                <input className='w-4 h-4 mx-2' type={'checkbox'} />
                <p>Completed</p>
            </div>
        </div>

        <span className='flex flex-row items-center border-2 border-blue-400 rounded-lg px-2 py-1 hover:shadow-lg'>
            <FaFilter color={APP_COLOR}/>
            <h1 className='ml-3 text-blue-400'>{FILTER}</h1>
        </span>
    </div>
  )
}

export default FilterBar