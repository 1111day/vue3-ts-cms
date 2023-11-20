import requestAc from "..";

export function LoginAction(formData: any) {
  return requestAc.post({
    url: "/login",
    data: formData,
  });
}
