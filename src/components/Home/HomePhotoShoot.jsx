const HomePhotoShoot = () => {
    return (
        <div  className='homePhotoshot'>
        <div className="photoshoot-container">
            <div className="model_photo_wrapper">
                <img  src={`${import.meta.env.BASE_URL}images/boy_1.webp`} alt="boy_1" className="model_photo_boy_1"/>
                 <img src={`${import.meta.env.BASE_URL}images/boy_2.webp`} alt="boy_2" className="model_photo_boy_2"/>
            </div>
             <div className="model_photo_wrapper">
                <img  src={`${import.meta.env.BASE_URL}images/female.webp`} alt="female" height="60" weight="60" className="model_photo_girl"/>
            </div>
        </div>
        </div>
    )
}
export default HomePhotoShoot