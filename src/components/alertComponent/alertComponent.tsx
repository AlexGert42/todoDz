import React, {useEffect} from 'react';
import {Alert, AlertTitle} from '@material-ui/lab';
import styles from './alertComponent.module.scss'
import {AlertContentType} from "../../store/app/appAction";


type AlertComponentType = {
    alertList?: AlertContentType[]
    onCloseAlert: (id: string) => void
}

export const AlertComponent = React.memo(({alertList, onCloseAlert}: AlertComponentType) => {

    useEffect(() => {
        if (!alertList) {
            return
        }
        let newAlertList = alertList.filter(el => el.type !== 'error')
        if (newAlertList.length !== 0) {
            setTimeout(() => {
                onCloseAlert(newAlertList[0].id)
            }, 2000)
        }
    }, [alertList?.length])

    return (
        <div className={styles.alert__block}>
            {alertList?.map(el => {

                return (
                    <Alert
                        className={styles.alert}
                        severity={el.type}
                        onClose={() => onCloseAlert(el.id)}
                        key={el.id}
                    >
                        <AlertTitle>{el.title}</AlertTitle>
                    </Alert>
                )
            })}
        </div>
    )
})