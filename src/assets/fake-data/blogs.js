const img01 = require("../images/blogs/img1.jpg")
const img02 = require("../images/blogs/img2.jpg")
const img03 = require("../images/blogs/img3.jpg")
const img04 = require("../images/blogs/img4.jpg")
const img05 = require("../images/products/01.jpg")

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
        title: "Camera an ninh hiện đại",
        date: "30/04/2024",
        image: img01,
        content: "Theo báo cáo của 6w Research, Việt Nam thuộc top các nước có số lượng camera an ninh đạt tốc độ phát triển nhanh nhất khu vực, với tỷ lệ tăng trưởng lũy kế hàng năm đạt 12,4%, trong giai đoạn 2016 - 2021 Dịch bệnh khiến nhu cầu về camera an ninh ngày càng tăng, khi nhiều gia đình, văn phòng, xí nghiệp cần camera an ninh phục vụ việc giám sát từ xa. công nghệ lưu trữ an toàn và tính năng cảnh báo thông minh là hai yếu tố được quan tâm hàng đầu khi chọn mua camera an ninh trong giai đoạn này."
    },
    {
        id: 6,
        title: "Tích hợp AI vào camera",
        date: "25/04/2024",
        image: img02,
        content:"Trước đây, các loại camera an ninh chủ yếu đóng vai trò là thiết bị giám sát bị động. Tức sau khi có sự cố xảy ra, người dùng mới mở camera để quan sát lại sự việc. Một số nơi có yêu cầu bảo vệ cao hơn, thường cần một đội ngũ nhân sự để giám sát camera. Tuy nhiên hạn chế của phương thức này là tốn thêm nhiều chi phí, vẫn có thể xảy ra sai sót, đồng thời gây khó khăn khi triển khai trên quy mô lớn. Để giải quyết tình trạng này, FPT Telecom phát triển công nghệ trí tuệ nhân tạo, cho phép camera có thể thay thế con người trong việc giám sát. Điểm vượt trội của AI trên FPT Camera IQ là khả năng phân biệt được chuyển động đó là của người hay vật thể, từ đó chủ động đưa ra cảnh báo đúng mục đích"
    },
    {
        id: 7,
        title: "An toàn khi sử dụng camera",
        date: "01/05/2024",
        image: img03,
        content: "Dù là doanh nghiệp hay người dùng cá nhân, bảo mật dữ liệu là điều tối quan trọng, đặc biệt với các thiết bị giám sát như camera. Các phương thức lưu trữ truyền thống như thẻ nhớ hoặc ổ cứng ngày càng bộc lộ nhiều rủi ro, như: có thể bị hỏng hóc dẫn đến mất dữ liệu do các yếu tố tác động từ bên ngoài; kẻ xấu đánh cắp dữ liệu nhằm lấy thông tin hoặc tiêu hủy bằng chứng. Ngoài ra, các thiết bị lưu trữ này thường có tuổi thọ giới hạn, đồng thời khiến người dùng phải tốn nhiều thao tác, chi phí nếu muốn nâng cấp. Trên thế giới, phương thức truyền thống này đang dần được thay thế bằng công nghệ điện toán đám mây"
    },
    {
        id: 8,
        title: "Đưa camera đến với người dân",
        date: "02/05/2024",
        image: '',
        content: "Tại Việt Nam, FPT Telecom là đơn vị đầu tiên ứng dụng Cloud vào camera an ninh. Với lợi thế sở hữu Trung tâm dữ liệu (FPT Data Center) đạt chuẩn Tier 3 của Uptime Institute - hệ thống tiêu chuẩn đánh giá dữ liệu uy tín nhất trên thế giới, hình ảnh từ camera an ninh của FPT Camera IQ được đảm bảo an toàn theo tiêu chuẩn khắt khe nhất. Việc ứng dụng Cloud cũng giúp hệ thống camera trở nên đồng bộ, gọn nhẹ hơn. Người dùng không cần đầu tư thiết bị lưu trữ, chỉ cần gắn camera, kết nối mạng Internet là có thể sử dụng ngay. Hình ảnh từ camera có thể dễ dàng xem từ bất cứ đâu với độ phân giải Full HD và độ trễ gần như bằng 0. Việc quản lý camera có thể thực hiện trên smartphone, máy tính hay tivi. Ngoài ra, Sử dụng FPT Camera IQ được tích hợp cloud đồng nghĩa với việc khách hàng sẽ được hưởng chế độ chăm sóc khách hàng, bảo trì, bảo hành 24/7."
    },
    {
        id: 9,
        title: "Đưa camera đến với người dân",
        date: "02/05/2024",
        image: img04,
        content: "Tại Việt Nam, FPT Telecom là đơn vị đầu tiên ứng dụng Cloud vào camera an ninh. Với lợi thế sở hữu Trung tâm dữ liệu (FPT Data Center) đạt chuẩn Tier 3 của Uptime Institute - hệ thống tiêu chuẩn đánh giá dữ liệu uy tín nhất trên thế giới, hình ảnh từ camera an ninh của FPT Camera IQ được đảm bảo an toàn theo tiêu chuẩn khắt khe nhất. Việc ứng dụng Cloud cũng giúp hệ thống camera trở nên đồng bộ, gọn nhẹ hơn. Người dùng không cần đầu tư thiết bị lưu trữ, chỉ cần gắn camera, kết nối mạng Internet là có thể sử dụng ngay. Hình ảnh từ camera có thể dễ dàng xem từ bất cứ đâu với độ phân giải Full HD và độ trễ gần như bằng 0. Việc quản lý camera có thể thực hiện trên smartphone, máy tính hay tivi. Ngoài ra, Sử dụng FPT Camera IQ được tích hợp cloud đồng nghĩa với việc khách hàng sẽ được hưởng chế độ chăm sóc khách hàng, bảo trì, bảo hành 24/7."
    },
    {
        id: 10,
        title: "Camera an ninh hiện đại",
        date: "30/04/2024",
        image: img01,
        content: "Theo báo cáo của 6w Research, Việt Nam thuộc top các nước có số lượng camera an ninh đạt tốc độ phát triển nhanh nhất khu vực, với tỷ lệ tăng trưởng lũy kế hàng năm đạt 12,4%, trong giai đoạn 2016 - 2021 Dịch bệnh khiến nhu cầu về camera an ninh ngày càng tăng, khi nhiều gia đình, văn phòng, xí nghiệp cần camera an ninh phục vụ việc giám sát từ xa. công nghệ lưu trữ an toàn và tính năng cảnh báo thông minh là hai yếu tố được quan tâm hàng đầu khi chọn mua camera an ninh trong giai đoạn này."
    },
    {
        id: 11,
        title: "Tích hợp AI vào camera",
        date: "25/04/2024",
        image: img02,
        content:"Trước đây, các loại camera an ninh chủ yếu đóng vai trò là thiết bị giám sát bị động. Tức sau khi có sự cố xảy ra, người dùng mới mở camera để quan sát lại sự việc. Một số nơi có yêu cầu bảo vệ cao hơn, thường cần một đội ngũ nhân sự để giám sát camera. Tuy nhiên hạn chế của phương thức này là tốn thêm nhiều chi phí, vẫn có thể xảy ra sai sót, đồng thời gây khó khăn khi triển khai trên quy mô lớn. Để giải quyết tình trạng này, FPT Telecom phát triển công nghệ trí tuệ nhân tạo, cho phép camera có thể thay thế con người trong việc giám sát. Điểm vượt trội của AI trên FPT Camera IQ là khả năng phân biệt được chuyển động đó là của người hay vật thể, từ đó chủ động đưa ra cảnh báo đúng mục đích"
    },
    {
        id: 12,
        title: "An toàn khi sử dụng camera",
        date: "01/05/2024",
        image: img03,
        content: "Dù là doanh nghiệp hay người dùng cá nhân, bảo mật dữ liệu là điều tối quan trọng, đặc biệt với các thiết bị giám sát như camera. Các phương thức lưu trữ truyền thống như thẻ nhớ hoặc ổ cứng ngày càng bộc lộ nhiều rủi ro, như: có thể bị hỏng hóc dẫn đến mất dữ liệu do các yếu tố tác động từ bên ngoài; kẻ xấu đánh cắp dữ liệu nhằm lấy thông tin hoặc tiêu hủy bằng chứng. Ngoài ra, các thiết bị lưu trữ này thường có tuổi thọ giới hạn, đồng thời khiến người dùng phải tốn nhiều thao tác, chi phí nếu muốn nâng cấp. Trên thế giới, phương thức truyền thống này đang dần được thay thế bằng công nghệ điện toán đám mây"
    },
    {
        id: 13,
        title: "Đưa camera đến với người dân",
        date: "02/05/2024",
        image: '',
        content: "Tại Việt Nam, FPT Telecom là đơn vị đầu tiên ứng dụng Cloud vào camera an ninh. Với lợi thế sở hữu Trung tâm dữ liệu (FPT Data Center) đạt chuẩn Tier 3 của Uptime Institute - hệ thống tiêu chuẩn đánh giá dữ liệu uy tín nhất trên thế giới, hình ảnh từ camera an ninh của FPT Camera IQ được đảm bảo an toàn theo tiêu chuẩn khắt khe nhất. Việc ứng dụng Cloud cũng giúp hệ thống camera trở nên đồng bộ, gọn nhẹ hơn. Người dùng không cần đầu tư thiết bị lưu trữ, chỉ cần gắn camera, kết nối mạng Internet là có thể sử dụng ngay. Hình ảnh từ camera có thể dễ dàng xem từ bất cứ đâu với độ phân giải Full HD và độ trễ gần như bằng 0. Việc quản lý camera có thể thực hiện trên smartphone, máy tính hay tivi. Ngoài ra, Sử dụng FPT Camera IQ được tích hợp cloud đồng nghĩa với việc khách hàng sẽ được hưởng chế độ chăm sóc khách hàng, bảo trì, bảo hành 24/7."
    },
    
]
export default blogPosts;