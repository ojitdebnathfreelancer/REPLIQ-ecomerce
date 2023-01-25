import React from 'react';

const AdminAddProduct = () => {
    const handelFood = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const discription = form.discription.value;
        const img = form.image.value;

        // const image = img[0];
        // const formData = new FormData();
        // formData.append("image", image);

        const foodInfo = {
            name,
            price,
            discription,
            img
        }
        console.log(foodInfo)
    };
    // get food info and added BD function 

    return (
        <div className="lg:my-3">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
                    <p className='font-bold text-center lg:text-3xl text-xl mt-2'>Post Food With Informations</p>
                    <div className="card-body">
                        <form onSubmit={(event) => handelFood(event)}>
                            <div className='lg:grid md:grid grid-cols-2 gap-x-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Food Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Product name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Food Price</span>
                                    </label>
                                    <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                                </div>
                            </div>

                            <div className='lg:grid md:grid grid-cols-2 gap-x-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Food Discription</span>
                                    </label>
                                    <input type="text" name='discription' placeholder="discription" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Food Photo</span>
                                    </label>
                                    <input type="file" name='image' placeholder="Product photo" className="file-input file-input-bordered file-input-info w-full" />
                                </div>
                            </div>

                            <div className="form-control mt-10">
                                <button className="btn capitalize px-8 py-1 bg-white hover:bg-[#8E2DE2] text-black text-lg hover:text-white mt-2">Add Food</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAddProduct;