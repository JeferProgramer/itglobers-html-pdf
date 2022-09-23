import React, {useState, useEffect} from 'react'
import {useCssHandles} from "vtex.css-handles"
import {useDevice} from "vtex.device-detector"
import "./styles.css"
type Props = {
  pdfUrl: string,
  width: number,
  height: number
}

const PdfReader = ({pdfUrl, width, height}: Props) => {

  const CSS_HANDLES = ["container"]
  const handles = useCssHandles(CSS_HANDLES)
  const {isMobile} = useDevice();

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  },[])

  return(
    mounted && (
      <div className={handles.container}>
        <object data={pdfUrl} type="application/pdf" width={width} height={height}>
          <iframe title='PDF' src={pdfUrl} width={width} height={height}>
            <p>Este navegador no soporta PDF!</p>
          </iframe>
        </object>
      </div>
    )
  )
}

export default PdfReader
