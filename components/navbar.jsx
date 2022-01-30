import Image from 'next/image'

const Navbar = (props) => {
    return (
        <navbar className={`bg-gradient-to-tr from-[#0b151a] to-[#153343] w-60 h-full space-y-5 p-5 absolute right-0 shadow-xl shadow-black text-white ease-in-out transition-all duration-300
                            ${props.popUpOpen ? 'blur pointer-events-none' : ''} `}>

            <div className='flex space-x-reverse space-x-36'>
                <button className='flex items-center'>
                    <svg className="h-6 w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </button>
                <button>
                    <svg className="h-8 w-8"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4.5 9 h5m-2.5 0v6" />  <path d="M13 15v-6l3 4l3 -4v6" /></svg>
                </button>
            </div>

            <div className='text-center'>
                <button className='flex w-28 m-auto my-5'>
                    <Image
                        src='/images/profileAvatar.jpg'
                        alt='Profile Avatar'
                        width={1060}
                        height={1060}
                        className='rounded-full'
                    />
                </button>

                <h3 className='font-semibold'>
                    مصطفی تبریزیان
                </h3>

                <h5 className='text-zinc-400 text-xs mt-1 font-semibold'>
                    tabrizian.codes@gmail.com
                </h5>

            </div>

            <div>
                <h5 className='text-sky-300 mt-10'>
                    داشبورد
                </h5>

                <ul className='space-y-4 mt-5'>
                    <li onClick={() => props.setAddUser(prev => prev ? false : true)} className='flex space-x-3 space-x-reverse p-2 rounded-lg hover:bg-slate-700'>
                        <svg className="h-6 w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                        </svg>
                        <span>
                            کاربر جدید
                        </span>
                    </li>
                    <li className='flex space-x-3 space-x-reverse p-2 rounded-lg hover:bg-slate-700'>
                        <svg className="h-6 w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                        </svg>
                        <span>
                            لیست کاربران
                        </span>
                    </li>
                    <li className='flex space-x-3 space-x-reverse p-2 rounded-lg hover:bg-slate-700'>
                        <svg className="h-6 w-6"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />  <line x1="6" y1="6" x2="6.01" y2="6" />  <line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                        <span>
                            سرویس ها
                        </span>
                    </li>
                    <li className='flex space-x-3 space-x-reverse p-2 rounded-lg hover:bg-slate-700'>
                        <svg className="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="13" y="8" width="8" height="12" rx="1" />  <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />  <line x1="16" y1="9" x2="18" y2="9" /></svg>
                        <span>
                            دستگاه های متصل 
                        </span>
                    </li>
                </ul>
            </div>
        </navbar>
    );
}
 
export default Navbar;