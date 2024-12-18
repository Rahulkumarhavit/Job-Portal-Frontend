import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className='text-white'>
            <div>
                <div>
                    <Link href="/">
                        <h1 className='text-2xl font-bold'>
                            Bot <span className='text-yellow-400'>fire</span>
                        </h1>
                    </Link>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link href="/dashboard/companies">Companies</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar