export interface Image {
  src: string | ArrayBuffer | null
  copies: number
  id: string
}

export interface SizeOption {
  label: string
  value: string
}
