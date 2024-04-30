const img01 = require("../images/blogs/img1.jpg")
const img02 = require("../images/blogs/img2.jpg")
const img03 = require("../images/blogs/img3.jpg")
const img04 = require("../images/blogs/img4.jpg")
const img05 = require("../images/blogs/img5.jpg")
const img06 = require("../images/blogs/img6.jpg")
const img07 = require("../images/blogs/img7.jpg")
const img08 = require("../images/blogs/img8.jpg")
const img09 = require("../images/blogs/img9.png")
const img10 = require("../images/blogs/img10.jpg")
const img11 = require("../images/blogs/img11.jpg")
const img12 = require("../images/blogs/img12.jpg")
const img13 = require("../images/blogs/img13.jpg")
const img14 = require("../images/blogs/img14.jpg")
const img15 = require("../images/blogs/img15.jpg")
const img16 = require("../images/blogs/img16.jpg")
const blogPosts = [
    {
        id: 1,
        title: "Camera an ninh hiện đại",
        date: "30/04/2024",
        image: img01,
        content: "Theo báo cáo của 6w Research, Việt Nam thuộc top các nước có số lượng camera an ninh đạt tốc độ phát triển nhanh nhất khu vực, với tỷ lệ tăng trưởng lũy kế hàng năm đạt 12,4%, trong giai đoạn 2016 - 2021 Dịch bệnh khiến nhu cầu về camera an ninh ngày càng tăng, khi nhiều gia đình, văn phòng, xí nghiệp cần camera an ninh phục vụ việc giám sát từ xa. công nghệ lưu trữ an toàn và tính năng cảnh báo thông minh là hai yếu tố được quan tâm hàng đầu khi chọn mua camera an ninh trong giai đoạn này."
    },
    {
        id: 2,
        title: "Tích hợp AI vào camera",
        date: "25/04/2024",
        image: img02,
        content:"Trước đây, các loại camera an ninh chủ yếu đóng vai trò là thiết bị giám sát bị động. Tức sau khi có sự cố xảy ra, người dùng mới mở camera để quan sát lại sự việc. Một số nơi có yêu cầu bảo vệ cao hơn, thường cần một đội ngũ nhân sự để giám sát camera. Tuy nhiên hạn chế của phương thức này là tốn thêm nhiều chi phí, vẫn có thể xảy ra sai sót, đồng thời gây khó khăn khi triển khai trên quy mô lớn. Để giải quyết tình trạng này, FPT Telecom phát triển công nghệ trí tuệ nhân tạo, cho phép camera có thể thay thế con người trong việc giám sát. Điểm vượt trội của AI trên FPT Camera IQ là khả năng phân biệt được chuyển động đó là của người hay vật thể, từ đó chủ động đưa ra cảnh báo đúng mục đích"
    },
    {
        id: 3,
        title: "An toàn khi sử dụng camera",
        date: "01/05/2024",
        image: img03,
        content: "Dù là doanh nghiệp hay người dùng cá nhân, bảo mật dữ liệu là điều tối quan trọng, đặc biệt với các thiết bị giám sát như camera. Các phương thức lưu trữ truyền thống như thẻ nhớ hoặc ổ cứng ngày càng bộc lộ nhiều rủi ro, như: có thể bị hỏng hóc dẫn đến mất dữ liệu do các yếu tố tác động từ bên ngoài; kẻ xấu đánh cắp dữ liệu nhằm lấy thông tin hoặc tiêu hủy bằng chứng. Ngoài ra, các thiết bị lưu trữ này thường có tuổi thọ giới hạn, đồng thời khiến người dùng phải tốn nhiều thao tác, chi phí nếu muốn nâng cấp. Trên thế giới, phương thức truyền thống này đang dần được thay thế bằng công nghệ điện toán đám mây"
    },
    {
        id: 4,
        title: "Đưa camera đến với người dân",
        date: "02/05/2024",
        image: img04,
        content: "Tại Việt Nam, FPT Telecom là đơn vị đầu tiên ứng dụng Cloud vào camera an ninh. Với lợi thế sở hữu Trung tâm dữ liệu (FPT Data Center) đạt chuẩn Tier 3 của Uptime Institute - hệ thống tiêu chuẩn đánh giá dữ liệu uy tín nhất trên thế giới, hình ảnh từ camera an ninh của FPT Camera IQ được đảm bảo an toàn theo tiêu chuẩn khắt khe nhất. Việc ứng dụng Cloud cũng giúp hệ thống camera trở nên đồng bộ, gọn nhẹ hơn. Người dùng không cần đầu tư thiết bị lưu trữ, chỉ cần gắn camera, kết nối mạng Internet là có thể sử dụng ngay. Hình ảnh từ camera có thể dễ dàng xem từ bất cứ đâu với độ phân giải Full HD và độ trễ gần như bằng 0. Việc quản lý camera có thể thực hiện trên smartphone, máy tính hay tivi. Ngoài ra, Sử dụng FPT Camera IQ được tích hợp cloud đồng nghĩa với việc khách hàng sẽ được hưởng chế độ chăm sóc khách hàng, bảo trì, bảo hành 24/7."
    },
    {
        id: 5,
        title: "3 Router WiFi xuyên tường sóng khỏe - lướt web cực đã",
        date: "30/03/2024",
        image: img05,
        content: "Sản phẩm được trang bị công nghệ hiện đại Beamforming giúp nhanh chóng phát hiện và tập trung sóng WiFi đến thiết bị được kết nối dù các thiết bị này ở các phòng khác nhau hoặc có công suất yếu. Cùng với đó là hệ thống anten ngoài có độ lợi cao giúp nhân đôi khả năng kết nối Internet liên tục mà không gặp sự cố. Công nghệ MU-MIMO của Router WiFi xuyên tường cho khả năng truyền dữ liệu băng tần khả dụng tốt nhất, giúp các thiết bị kết nối truyền và nhận thông tin cùng lúc mượt mà, dễ dàng tận hưởng các tác vụ giải trí và làm việc hiệu quả bất tận cùng lúc."
    },
    {
        id: 6,
        title: "Lướt Internet tốc độ cao ở nhiều không gian",
        date: "25/02/2024",
        image: img06,
        content:"Router giúp mọi thành viên trong gia đình trải nghiệm vạch sóng WiFi cực khỏe dù đi bất cứ đâu từ nhà tắm, nhà vệ sinh, phòng bếp, phòng ngủ, vườn cây và cả sân trước hoặc sân sau. Bên cạnh đó, WiFi xuyên tường giúp cho nhân viên toàn công ty sử dụng mạng Internet căng đét để gửi email, trao đổi qua zalo, họp online,... ở mọi phòng ban, kể cả ở dưới sảnh lễ tân, căng tin hay nhà gửi xe,... "
    },
    {
        id: 7,
        title: "Sóng WiFi phát được bao xa? Trung bình 30 - 50m",
        date: "02/05/2024",
        image: img07,
        content: "Hầu hết người dùng mạng hiện nay không nắm được câu trả lời cho vấn đề sóng WiFi phát được bao xa. Họ chỉ hiểu một cách mơ hồ và không biết rằng để có vùng phủ lớn cho thiết bị phát WiFi thì còn phụ thuộc vào nhiều yếu tố khách quan khác. Ở bài viết sau, mời bạn đọc cùng TP-Link nghiên cứu cụ thể hơn về chủ đề này đồng thời khám phá thêm một số cách để gia tăng vùng phủ cho bộ phát WiFi. "
    },
    {
        id: 8,
        title: "Top 3 sản phẩm WiFi Mesh cho doanh nghiệp sóng khỏe vượt không gian",
        date: "02/05/2024",
        image: img08,
        content: "Phần lớn người dùng cần sử dụng mạng Internet để làm việc liên tục nên cần một thiết bị WiFi Mesh có tính năng đủ ổn, đáp ứng tốt nhu cầu sử dụng. Hiện nay, có rất nhiều mẫu mã WiFi Mesh cho doanh nghiệp được bày bán trên thị trường, dưới đây bài viết sẽ gợi ý đến bạn top những sản phẩm WiFi Mesh sóng khỏe vượt mọi không gian mà chủ doanh nghiệp nào cũng ưa thích."
    },
    {
        id: 9,
        title: "Easy Mesh là gì ? Ưu điểm của hệ thống EasyMesh ? Thiết bị nào có hỗ trợ EasyMesh ?",
        date: "02/04/2024",
        image: img09,
        content: "Mesh Wi-Fi gồm các thiết bị phát sóng Wi-Fi kết hợp với nhau để tạo thành một hệ thống mạng thống nhất với cùng một tên WiFi và mật khẩu. Mỗi thiết bị của bộ Mesh đều hoạt động riêng biệt để cung cấp tín hiệu wifi cho bạn, tất cả thiết bị Mesh hoạt động cùng nhau tạo thành một mạng lưới WiFi lớn bao phủ mọi ngóc ngách trong nhà bạn."
        
    },
    {
        id: 10,
        title: "8 công dụng tuyệt vời của bộ phát WiFi trong cuộc sống hàng ngày",
        date: "30/03/2024",
        image: img10,
        content: "Bản chất của bộ phát WiFi ra đời để giải quyết vấn đề sử dụng mạng Internet của người dùng hiện nay. Do đó, các sản phẩm bộ phát WiFi trên thị trường đều sở hữu công dụng chia sẻ kết nối mạng đến nhiều thiết bị cùng lúc. Tuy nhiên, số lượng thiết bị kết nối tùy vào công nghệ, giá tiền và tính năng của bộ phát. Hầu hết các thiết bị phát WiFi cố định đều có khả năng mở rộng phạm vi vùng phủ sóng. Tuy nhiên, tùy vào gói cước Internet của nhà mạng, môi trường xung quanh, băng tần kết nối, số lượng anten và công nghệ đi kèm mà diện tích vùng phủ sẽ tăng hoặc giảm tương ứng. Đây chính là các yếu tố chính giúp người dùng dễ dàng cân nhắc lựa chọn bộ phát thỏa mãn không gian phát sóng WiFi trong gia đình."
    },
    {
        id: 11,
        title: "8 sản phẩm WiFi 6 5GHz cho chất lượng sóng vượt trội",
        date: "12/03/2024",
        image: img11,
        content:"WiFi 6 5GHz đang là một trong những sản phẩm phát sóng WiFi được ưa chuộng nhất hiện nay. Không chỉ sở hữu những tính năng vượt trội mà thiết bị còn giúp căn phòng tăng thêm tính thẩm mỹ vì sự nhỏ gọn, thiết kế hiện đại. Sau đây, TP-Link sẽ gợi ý đến bạn đọc 8 sản phẩm WiFi 6 5GHz đáp ứng mọi nhu cầu của người dùng từ cơ bản đến nâng cao. Mời bạn cùng theo dõi"
    },
    {
        id: 12,
        title: "6 cách cài đặt DNS cho Router phù hợp với mọi nhu cầu",
        date: "03/05/2024",
        image: img12,
        content: "Với đối tượng người dùng chỉ có nhu cầu sử dụng internet thông thường không cần tốc độ cao, đủ để lướt facebook, lướt web nhìn rõ hình ảnh, video, gọi điện facetime, nghe nhạc trực tuyến, gửi email,... thì bạn nên cài đặt DNS mặc định từ nhà sản xuất Router với từng thiết bị cụ thể sau đây. "
    },
    {
        id: 13,
        title: "WiFi 3 băng tần là gì? Hệ thống WiFi Tri-Band sở hữu nhiều điểm độc đáo",
        date: "14/02/2024",
        image: img13,
        content: "WiFi ba băng tần được hiểu đơn giản là thiết bị WiFi phát đi ba tín hiệu khác nhau. Thay vì lưu trữ mạng ở tần số khác thứ ba, thiết bị WiFi ba băng tần lưu trữ 1 tín hiệu 2.4 GHz và hai tín hiệu 5GHz riêng biệt giúp tăng tốc độ phát Internet hiệu quả. Từ đó tăng khả năng cung cấp sóng WiFi cho nhiều người dùng hơn là cục phát sở hữu WiFi băng tần kép."
    },
    {
        id: 14,
        title: "Router Bridge mode là gì? Ưu nhược điểm - ứng dụng & cách cài đặt",
        date: "02/05/2024",
        image: img14,
        content: "Router Bridge là một tính năng nâng cao có sẵn trong các Bộ định tuyến và Modem được nhiều người sử dụng. Việc áp dụng Bridge Mode yêu cầu người sử dụng cần có kiến thức nhất định về hệ thống mạng và hiểu về hệ thống mạng của mình. Vậy nên, trong phần 1, bài viết sẽ giới thiệu tới các bạn cách hiểu và các cách sử dụng phổ biến nhất của khái niệm Router Bridge Mode.."
    },
    {
        id: 15,
        title: "8 Biện pháp phòng ngừa lộ clip nhạy cảm từ camera WiFi gia đình",
        date: "02/05/2024",
        image: img15,
        content: "Trong thời đại công nghệ phát triển như hiện nay, việc sử dụng camera WiFi gia đình đã trở thành một giải pháp phổ biến để giám sát an ninh và theo dõi không gian sống. Tuy nhiên, việc lộ clip nhạy cảm từ camera WiFi có thể gây ra những hậu quả nghiêm trọng cho sự riêng tư và an ninh của gia đình. Trong bài viết này, chúng ta sẽ tìm hiểu về các biện pháp phòng ngừa để đảm bảo an toàn và bảo mật cho hệ thống camera WiFi gia đình."
    },
    {
        id: 16,
        title: "6 lợi ích của camera WiFi an ninh cho gia đình bạn",
        date: "01/03/2024",
        image: img16,
        content: "Camera an ninh đã trở thành một trong những phương tiện quan trọng để giám sát và bảo vệ gia đình trong thời đại công nghệ hiện nay. Không chỉ là một công cụ đơn giản để giám sát những người khác hoặc các hoạt động xảy ra trong khu vực nhà của bạn, mà còn cung cấp cho bạn nhiều lợi ích khác nhau. Trong bài viết này, chúng ta sẽ tìm hiểu về những lợi ích của camera an ninh cho gia đình của bạn."
    },
    
]
export default blogPosts;