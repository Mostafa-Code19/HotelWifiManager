import { log } from './base.jsx'

const AddUserPanel = (props) => {

    return (
        <div className={`absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] border py-5 px-10 rounded-xl shadow-xl
                        ${props.addUser ? 'fadeIn' : 'fadeOut'} `}>
            <button onClick={() => {props.setAddUser(false)}} className='mb-5 relative left-7 bottom-2'>
                <svg className="h-6 w-6"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>


            <h3 className='font-semibold'>ایجاد کاربر جدید</h3>
            <form className='space-y-7 mt-10'>
                <div>
                    <label htmlFor="userName">نام کاربری:</label>
                    <input type="text" id="userName" name="userName" className='shadow-xl shadow-[#5f5f5f19] rounded mx-5 px-2' required />
                </div>
                <div>
                    <label htmlFor="userPass">رمز عبور:</label>
                    <input type="password" id="userPass" name="userPass" className='shadow-xl shadow-[#5f5f5f19] rounded mx-5 px-2' required />
                </div>
                <div>
                    <label htmlFor="userPhoneNum">تلفن همراه:</label>
                    <input type="number" id="userPhoneNum" name="userPhoneNum" className='shadow-xl shadow-[#5f5f5f19] rounded mx-5 px-2' required />
                </div>
                <div>
                    <label htmlFor="serviceType">نوع سرویس:</label>
                    <select name="serviceType" id="serviceType" className='mx-5 pr-4'>
                        <option value="type1">نوع ۱</option>
                        <option value="type2">۲ نوع</option>
                        <option value="type3">۳ نوع</option>
                        <option value="type4">۴ نوع</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="serviceExpire">اعتبار زمانی:</label>
                    <input type="time" id="serviceExpire" name="serviceExpire" max="24:00" className='shadow-xl shadow-[#5f5f5f19] rounded mx-5 px-2' required />
                    <input type="number" id="serviceExpire" name="serviceExpire" className='shadow-xl shadow-[#5f5f5f19] rounded mx-5 px-2 w-16' required />
                    <span>روز</span>
                </div>

                <div>
                    <label htmlFor="downloadLimit">محدودیت دانلود:</label>
                    <input type="number" id="downloadLimit" name="downloadLimit" className='shadow-xl shadow-[#5f5f5f19] rounded mx-5 px-2 w-28' required />
                    <span>مگابیت</span>
                </div>
                
                <div>
                    <label htmlFor="uploadLimit">محدودیت آپلود:</label>
                    <input type="number" id="uploadLimit" name="uploadLimit" className='shadow-xl shadow-[#5f5f5f19] rounded mx-5 px-2 w-28' required />
                    <span>مگابیت</span>
                </div>

                <div>
                    <label htmlFor="downloadUploadLimit">محدودیت دانلود و آپلود:</label>
                    <input type="number" id="downloadUploadLimit" name="downloadUploadLimit" className='shadow-xl shadow-[#5f5f5f19] rounded mx-5 px-2 w-28' required />
                    <span>مگابیت</span>
                </div>

                <div className='flex justify-end'>
                    <button className='bg-green-700 px-3 py-1 text-white rounded-xl flex'>
                        <svg className="h-6 w-6"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polyline points="20 6 9 17 4 12" /></svg>
                        <span>تایید</span>
                    </button>
                </div>

            </form>
        </div>
    );
}
 
export default AddUserPanel;