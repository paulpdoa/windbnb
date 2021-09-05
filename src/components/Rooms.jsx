import rooms from '../rooms';

const Rooms = ({found}) => {

    // const datas = ['paul','dannabelle','polo','danang','dang','popoy'];
    // const search = '';
    // let filteredData = datas.filter((data) => {
    //     if(search === '') {
    //         return data;
    //     } else if(data.includes(search)) {
    //         return data;
    //     }
    // })
    // console.log(filteredData);

    let filteredData = rooms.filter((room) => {
        if(room.city === found.city) {
            return room;
        } else if(room.city.includes(found)) {
            return room;
        }
    })
    console.log(filteredData);

    return (
        <div className="main room-main">
            <div className="container room-content">
                {filteredData.map((room) => (
                    <div className="room-card" key={room.id}>
                        <div className="room-image-container">
                            <img className="room-image" src={room.photo} alt="room" />
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                {room.superHost === true ? <p className="superhost">SUPER HOST</p> : <p style={{ display:"none" }}>none</p>}
                                <p className="room-type">{room.type}{room.beds && <span> . {room.beds} bed(s)</span>}</p>
                                <div className="rating">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <p>{room.rating}</p>
                                </div>
                            </div>
                            <h3 className="room-title">{room.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Rooms
