import React from 'react'
import Link from 'next/link'
import Icon from '@mdi/react';
import { mdiHomeOutline } from '@mdi/js';
import { mdiInbox } from '@mdi/js';
import { mdiTag } from '@mdi/js';
import { mdiImageSizeSelectLarge } from '@mdi/js';
import { mdiAccount } from '@mdi/js';
import { mdiPoll } from '@mdi/js';
import { mdiMovieEdit } from '@mdi/js';
import { mdiAccountGroup } from '@mdi/js';
import { mdiAccountTie } from '@mdi/js';

const Sidebar = ({ children }) => {
    return (
        <div className='flex'>
            <div className='fixed w-20 h-screen p-4 bg-white flex flex-col justify-between'>
                {/* <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'> */}
                <div className='flex flex-col w-48 bg-gray-200'>
                    <Link href='/'>
                        <div className=' text-gray-800 px-3 py-2 d-flex align-items-center inline-flex'>
                            <Icon path={mdiHomeOutline} size={1} className='pr-1' />
                            Dashboard
                        </div>
                    </Link>
                    {/* <span className='border-b-[1px] border-gray-200 w-full p-2'> </span> */}
                    <Link href='/orders'>
                        <div className=' text-gray-800 px-3 py-2 d-flex align-items-center inline-flex'>
                            <Icon path={mdiInbox} size={1} className='pr-1' />
                            Orders
                        </div>
                    </Link>
                    <Link href='/products'>
                        <div className=' text-gray-800 px-3 py-2 d-flex align-items-center inline-flex'>
                            <Icon path={mdiTag} size={1} className='pr-1' />
                            Products
                        </div>
                    </Link>
                    <Link href='/collections'>
                        <div className=' text-gray-800 px-3 py-2 d-flex align-items-center inline-flex'>
                            <Icon path={mdiImageSizeSelectLarge} size={1} className='pr-1' />
                            Collections
                        </div>
                    </Link>
                    <Link href='/customers'>
                        <div className=' text-gray-800 px-3 py-2 d-flex align-items-center inline-flex'>
                            <Icon path={mdiAccount} size={1} className='pr-1' />
                            Customers
                        </div>
                    </Link>
                    <Link href='/blogs'>
                        <div className=' text-gray-800 px-3 py-2 d-flex align-items-center inline-flex'>
                            <Icon path={mdiMovieEdit} size={1} className='pr-1' />
                            Blog Page
                        </div>
                    </Link>
                    <Link href='/users'>
                        <div className=' text-gray-800 px-3 py-2 d-flex align-items-center inline-flex'>
                            <Icon path={mdiAccountGroup} size={1} className='pr-1' />
                            Users
                        </div>
                    </Link>
                    <Link href='/sales'>
                        <div className=' text-gray-800 px-3 py-2 d-flex align-items-center inline-flex'>
                            <Icon path={mdiPoll} size={1} className='pr-1' />
                            Sales
                        </div>
                    </Link>
                    <Link href='/admin'>
                        <div className=' text-gray-800 px-3 py-2 d-flex align-items-center inline-flex'>
                            <Icon path={mdiAccountTie} size={1} className='pr-1' />
                            Super Admin Mode
                        </div>
                    </Link>
                </div>
            </div>
            <main className='ml-60 w-full'>{children}</main>
        </div>
    )
}

export default Sidebar