const btoa = (data: string): string => Buffer.from(data).toString('base64')

export default btoa
