import { Button, IconButton, Snackbar } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import React, { useState } from "react"
import { SWRConfig } from "swr"
import { fetcherJson } from "../../../lib/fetcher"

export interface Message {
  message: string
  data: any
  type: "info" | "danger" | "success" | "warning"
}
const GlobalErrorHandler: React.FC<React.PropsWithChildren<any>> = ({
  children,
}) => {
  const [message, setMessage] = useState<Message>()

  const handleClose = () => {
    setMessage(undefined)
  }

  const onError = (error: any, key: any) => {
    console.error(error, key)
    if (error.status !== 403 && error.status !== 404) {
      setMessage({
        message: `${error?.message}`,
        data: { error, key },
        type: "danger",
      })
    }
  }

  return (
    <SWRConfig
      value={{
        onError,
        fetcher: fetcherJson,
      }}
    >
      {children}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={!!message}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message?.message}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              OK
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </SWRConfig>
  )
}

export default GlobalErrorHandler
