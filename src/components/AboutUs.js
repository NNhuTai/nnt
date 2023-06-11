// About Us Page that displays a photo gallery of people with titles below.
import * as React from 'react';
import jasper from '../assets/profiles/jasper_profile.png';
import cooper from '../assets/profiles/cooper_profile.png';

export const AboutUs = () => {
    return (
      <>
      <div className='about-background'>
    <div className="faq-header">
        Giới Thiệu
    </div>
    <h3>CÔNG TY TNHH SX TM CƠ KHÍ An Phát</h3>
    <div className='about-row'>
        <div className='about-col'>
        
        <p className='about-title'> 
Công ty cơ khí An Phát là công ty chuyên sản xuất lắp đặt dây chuyền, thiết bị inox trong các lĩnh vực như xây dựng, công nghiệp, dân dụng ... Công ty chuyên gia công sản xuất lắp đặt các sản phần lan can cầu thang, khung của ...bằng inox chính hãng. 
</p><p className='about-title'> 
Với đội ngũ nhân viên nhiều năm kinh nghiệm, kỹ sư giỏi chuyên môn và công nhân lành nghề, sự nhiệt tình tư vấn, hỗ trợ chúng tôi luôn sẵn sàng phục vụ Quý khách hàng một cách tốt nhất với những sản phẩm chất lượng, phù hợp nhất với nhu cầu và mục đích sử dụng của Quý khách hàng. Dựa trên việc nâng cao chất lượng sản phẩm, giá thành cạnh tranh, hoàn thiện tổ chức - sản xuất, tăng cường phát triển mối quan hệ hợp tác là yếu tố quyết định để công ty chúng tôi tồn tại và phát triển vững mạnh.
</p><p className='about-title'> 
Là công ty cung cấp về dịch vụ inox uy tín, với phương châm chất lượng là trên hết chúng tôi sẽ mang đến cho quý khách những sản phẩm chất lượng với giá cả tốt nhất.
</p>
<p className='about-title'> 
Chắc chắn với những kiến thức chuyên sâu và sự phục vụ chuyên nghiệp, Công ty Cơ khí An Phát sẽ là điểm đến lý tưởng cho những quyết định về dây chuyền, thiết bị inox của Quý khách. </p>
    </div>
    </div>
    </div>
      </>
    )
};

export default AboutUs