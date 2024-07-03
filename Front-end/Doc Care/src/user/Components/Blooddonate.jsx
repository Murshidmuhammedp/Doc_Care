import React from 'react'

function Blooddonate() {
    return (
        <>
            {/* <div data-theme="light" className='h-screen'>
                <h1 className='text-3xl font-bold'>PRODUCT ADDING</h1>
                <form>
                    <label>
                        <div className="label">
                            <span className="label-text font-bold">Enter Product Name</span>
                        </div>
                        <input required type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs" onChange={e => settitle(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Upload Product Image</span>
                        </div>
                        <input required type="file" placeholder="Product URL" className="input input-bordered w-full max-w-xs" onChange={e => setimage(e.target.files[0])} />
                        <div className="label">
                        </div>
                    </label>

                   

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Enter Product Description</span>
                        </div>
                        <input required type="text" placeholder="Product Description" className="input input-bordered w-full max-w-xs" onChange={e => setdescription(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Enter Product Price</span>
                        </div>
                        <input required type="text" placeholder="Product Price" className="input input-bordered w-full max-w-xs" onChange={e => setprice(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>
                    <button type="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Submit</button>
                </form>

            </div > */}

            <div className="bg-white bg-opacity-40 p-8 rounded-lg shadow-lg w-full max-w-sm mx-4">
                <h2 style={{ fontFamily: 'inria-serif' }} className="text-3xl font-bold mb-6 text-center">Register</h2>
                <form>
                    <div className="mb-4">
                        <label>
                            <div className="label">
                                <span className=" font-bold">Enter Donor name</span>
                            </div>
                            <input
                                type="text"
                                id="username"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                placeholder="User name"
                                required
                                onChange={e => setusername(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Select Blood group</span>
                        </div>
                        <select className="h-[40px] w-full" onChange={e => setcategory(e.target.value)}>
                            <option>Select category</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </label>
</div>
                    <div className="mb-4">
                        <label>
                            <div className="label">
                                <span className="font-bold">Enter Donor e-mail</span>
                            </div>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                placeholder="E-mail"
                                required
                                onChange={e => setemail(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label>
                            <div className="label">
                                <span className=" font-bold">Enter Contact number</span>
                            </div>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                placeholder="Phone number"
                                required
                                onChange={e => setnumber(e.target.value)}
                            />
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200 text-xl"
                    >
                        Register
                    </button>
                </form>
            </div>
        </>
    )
}

export default Blooddonate