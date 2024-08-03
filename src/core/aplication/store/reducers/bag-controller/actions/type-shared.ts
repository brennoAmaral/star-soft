import { PayloadAction } from "@reduxjs/toolkit"

export type IPayload<T> = PayloadAction<T>['payload']