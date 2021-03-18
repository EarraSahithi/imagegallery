import React, { useState } from 'react';
import './images.css'

function Images() {
    const [imageurl,setImgurl]=useState('')
    const [open,setOpen]=useState(false)
    const [imagearray,setImagearray]=useState([
        "https://i.picsum.photos/id/175/2896/1944.jpg?hmac=djMSfAvFgWLJ2J3cBulHUAb4yvsQk0d4m4xBJFKzZrs" ,
        "https://i.picsum.photos/id/133/2742/1828.jpg?hmac=0X5o8bHUICkOIvZHtykCRL50Bjn1N8w1AvkenF7n93E",
        "https://i.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4",
        "https://i.picsum.photos/id/250/4928/3264.jpg?hmac=4oIwzXlpK4KU3wySTnATICCa4H6xwbSGifrxv7GafWU",
        "https://i.picsum.photos/id/30/1280/901.jpg?hmac=A_hpFyEavMBB7Dsmmp53kPXKmatwM05MUDatlWSgATE",
        "https://i.picsum.photos/id/464/3198/2230.jpg?hmac=PvWYTRxxxpPyuU2k_p7abQZAF584A6poZ0lH12q-k6w",
        "https://i.picsum.photos/id/357/3888/2592.jpg?hmac=322FsZ93_k9v7NNFeCTlqk_gobPP_1mYJIQwk7GxjMc",
        "https://i.picsum.photos/id/175/2896/1944.jpg?hmac=djMSfAvFgWLJ2J3cBulHUAb4yvsQk0d4m4xBJFKzZrs",
        "https://i.picsum.photos/id/1059/7360/4912.jpg?hmac=vVWk1qyiXN_VgPhpNqFm3yl2HUPW6fHqYOjTHYO2bHQ"

    ])
    const [showmodal,setShowmodal]=useState(false)
    const [popimageurl,setPopimageurl]=useState('')

    const images=imagearray.map((url,i)=>{
        return (
            <>
            </>

        ) 

    })
    const imageSubmitter=(event)=>{
        event.preventDefault();
        let imageArray=imagearray;
        imageArray.push(imageurl);
        setImagearray(imageArray)

    }
    const handleShowDialog=()=>{
        setOpen(false)
        setImgurl('')
    }
    const handleclickChange=(event)=>{
        event.preventDefault();
        setImgurl(event.target.value);

    }
    const showImage=(url)=>{
        setOpen(true)
        setImgurl(url)
    }
    return (
        <div>
            <div >
            <div className="row">
            {
                imagearray.map((url,i)=>{
                    return (
                        <>
                  
                      <div className="col-md-4 col-sm-12 my-4 p-20">
                          <div key={i} style={{height:'200px',width:'150px',display:'flex',padding:'20px'}}>
                             <div className="card" >
                                  <img className="card-img-top" style={{height:'500px',width:"300px"}} src={url} alt="Card image cap" onClick={()=>{showImage(url)}}/>

                                </div>
                          </div>
                     </div> 
            
            {open && (
          <dialog
            className="dialog"
            style={{ position: 'absolute' }}
            open
            onClick={handleShowDialog}
          >
              <i class="fa fa-arrows-alt" style={{cursor:"pointer"}} onClick={()=>{handleShowDialog()}}></i>
            <img
            style={{
                height:"500px",
                width:"500px"
            }}
              className="image"
              src={imageurl}
              onClick={()=>{handleShowDialog()}}
              alt="no image"
            />
          </dialog>
        )}
                        </>
                    )
                })
            }
            </div>
            </div>
            
            
        </div>
    )
}

export default Images
