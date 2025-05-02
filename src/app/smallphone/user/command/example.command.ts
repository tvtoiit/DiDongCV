export class ExampleCommand extends EventTarget {
    private param: any;
  
    constructor(param: any) {
      super();
      this.param = param;
    }
  
    // Hàm thực thi gọi API
    execute() {
      // Ví dụ logic gọi API (dùng HttpClient khi tích hợp thật)
      setTimeout(() => {
        const resultObj = { message: "API call success", data: this.param };  // Mock data
        this.onSuccess(resultObj);  // Gọi hàm onSuccess khi thành công
      }, 1000);
    }
  
    // Hàm xử lý khi thành công
    onSuccess(resultObj: any) {
      const event = new CustomEvent('success', { detail: resultObj });
      this.dispatchEvent(event);  // Phát sự kiện 'success'
    }
  }
  