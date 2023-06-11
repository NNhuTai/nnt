import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';
import street_pic from '../assets/street_pizza_photo.png';
import dough from '../assets/dough.png';
import oven from '../assets/oven.png';
import finsihed_pizza from '../assets/finished.png';
import down_arrow from '../assets/down_arrow.png';
// import oven_vid from '../assets/Oven_Compressed.mp4';
import home_page_vid from '../assets/home-page-vid.mov';


export const Home = () => {
    const ref = useRef();
  return(
      <>
   <div>
     
      <Parallax pages={6.5} ref={ref}> 
    
        <ParallaxLayer 
        speed={0}
        offset={0}>
        
      
        <video className='videoHome' autoPlay loop muted playsInline>
          <source src={home_page_vid} type="video/mp4" />
         
        </video>
        </ParallaxLayer>


        <ParallaxLayer 
        speed={1}
        offset={0}>
        <div className='home-title-box'>
        <h1 className='home-title'> Welcome to <br/>NNT Solution</h1>
        </div>
        </ParallaxLayer>

        <ParallaxLayer 
        speed={0}
        offset={1}
        className={'homeImage'}
        style={{
            backgroundImage: `url(${dough})`,
            backgroundSize: 'cover',
        }}>
        </ParallaxLayer>


        <ParallaxLayer 
        speed={1}
        offset={.9}>
        <div className='home-div1'>
        <h1 className='home-subheader'> Our Mission</h1>
        <p className='home-paragraph'> Phục vụ khác hàng, cung cấp sản phẩm chất lượng</p>
        </div>
        </ParallaxLayer>
       
       
        <ParallaxLayer 
        speed={0}
        offset={2}
        className={'homeImage'}
        style={{
            backgroundImage: `url(${oven})`,
            backgroundSize: 'cover',
        }}>
        </ParallaxLayer>
       

        <ParallaxLayer 
        speed={1}
        offset={1.5}>
        <div className='home-div1'>
        <h1 className='home-subheader'> The Challenge</h1>
        <p className='home-paragraph'> Make 1,000,000 goods. <br/> <br/> It might take a while (we only have ☝️ oven for god's sake!). Deal? Still curious? Keep scrolling to learn more or click that big red button 👇
        </p>
        </div>
        </ParallaxLayer>


        <ParallaxLayer 
        speed={1}
        offset={2.5}>
        <a style={{textDecoration:'none'}} href='https://www.facebook.com/Banghetukeinox' target="_blank" rel="noreferrer">
        <h1 className='red-button'> Facebook page</h1>
        </a>

         {/* <video autoPlay loop muted>
          <source src={oven_vid} type="video/mp4" />
        </video> */}
        </ParallaxLayer>

        <ParallaxLayer 
        speed={0}
        offset={3}
        className={'homeImage'}
        style={{
            backgroundImage: `url(${finsihed_pizza})`,
            backgroundSize: 'cover',
        }}>
        </ParallaxLayer>

        <ParallaxLayer 
        speed={0}
        offset={4}
        className={'homeImage'}
        style={{
            backgroundImage: `url(${street_pic})`,
            backgroundSize: 'cover',
        }}>
        </ParallaxLayer>


        <ParallaxLayer 
        speed={0}
        offset={4.5}>
        
        <h1 style={{fontSize: "40px"}} className='home-subheader'> Still curious?</h1>

        </ParallaxLayer>

        <ParallaxLayer 
        speed={0}
        offset={4.95}
        >
        <img src={down_arrow} alt="Down arrow" className="down-arrow"></img>
        </ParallaxLayer> 

         <ParallaxLayer 
        speed={0}
        offset={5}
        factor={1.5}
        style={{
            backgroundColor: '#C75146',
        }}
        >
          <div>
          <h1 className='home-title'>
             Giới Thiệu
          </h1>
          <p className='home-about'>
          Công ty cơ khí An Phát là công ty chuyên sản xuất lắp đặt dây chuyền, thiết bị inox trong các lĩnh vực như xây dựng, công nghiệp, dân dụng ... Công ty chuyên gia công sản xuất lắp đặt các sản phần lan can cầu thang, khung cửa ...bằng inox chính hãng. 
          </p>
          <p className='home-about'>
          Với đội ngũ nhân viên nhiều năm kinh nghiệm, kỹ sư giỏi chuyên môn và công nhân lành nghề, sự nhiệt tình tư vấn, hỗ trợ chúng tôi luôn sẵn sàng phục vụ Quý khách hàng một cách tốt nhất với những sản phẩm chất lượng, phù hợp nhất với nhu cầu và mục đích sử dụng của Quý khách hàng. Dựa trên việc nâng cao chất lượng sản phẩm, giá thành cạnh tranh, hoàn thiện tổ chức - sản xuất, tăng cường phát triển mối quan hệ hợp tác là yếu tố quyết định để công ty chúng tôi tồn tại và phát triển vững mạnh.
          </p>
          <p className='home-about'>Uy tín hàng đầu</p>
          </div>
        
        </ParallaxLayer>
      
         
          </Parallax> 
 </div>

   </>
  )
}