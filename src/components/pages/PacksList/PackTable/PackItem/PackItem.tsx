import React, {FC} from 'react';
import TableCell from "@mui/material/TableCell";
import {Button} from "@mui/material";
import TableRow from "@mui/material/TableRow";
import {Link} from "react-router-dom";
import {ModalComponentType} from "../../../../../bll";

const styleTd = {
    '&:last-child td, &:last-child th': {border: 0},
    '&:nth-of-type(even)': {background: ' #F8F7FD'}
}

const styleAlignCell = {
    '& :not(:first-of-type)': {textAlign: 'left'}
}

interface PropsType {
    packName: string;
    cardsCount: number;
    createdDate: string;
    createdByName: string;
    updatedDate: string;
    packID: string;
    packUserID: string;
    actions?: null;
    authorizedUserId: string;
    handlerLearnCards: (id: string, name: string) => void
    handlerGetCards: (e: React.MouseEvent<HTMLAnchorElement>, length: number, isOwner: boolean) => void;
    openModalWindow: (isOpen: boolean, component: ModalComponentType, packID: string, packName: string) => void
}


export const PackItem: FC<PropsType> = (props) => {

    const {
        packName,
        packUserID,
        createdByName,
        packID,
        createdDate,
        cardsCount,
        updatedDate,
        authorizedUserId,
        handlerGetCards,
        handlerLearnCards,
        openModalWindow,
    } = props

    const isOwner = packUserID === authorizedUserId

    return (
        <TableRow
            key={packID}
            sx={[styleTd, styleAlignCell]}
        >
            <TableCell>
                <Link to={`/cards/${packID}`} style={{textDecoration: 'none'}}
                      onClick={(e) => handlerGetCards(e, cardsCount, isOwner)}>
                    {packName}
                </Link>
            </TableCell>
            <TableCell>{cardsCount}</TableCell>
            <TableCell>{createdDate}</TableCell>
            <TableCell>{createdByName}</TableCell>
            <TableCell>{updatedDate}</TableCell>
            <TableCell>
                <div style={{display: 'flex', gap: '14px', justifyContent: 'end'}}>
                    {packUserID === authorizedUserId &&
                        <Button
                            sx={[{
                                color: '#ffff',
                                height: 'auto',
                                background: 'linear-gradient(to right, #f50000, #f50000)'
                            }]}
                            variant={'contained'}
                            onClick={() => openModalWindow(true, "DELETE", packID, packName)}
                        >Delete</Button>
                    }
                    {packUserID === authorizedUserId &&
                        <Button
                            variant={'contained'}
                            sx={[{
                                height: 'auto',
                                background: 'linear-gradient(to right, #344654, #344654)'
                            }]}
                            onClick={() => openModalWindow(true, "EDIT", packID, packName)}
                        >Edit</Button>
                    }
                    <Button
                        variant={'contained'}
                        sx={[{
                            height: 'auto',
                            background: 'linear-gradient(to right, #344654, #344654)'
                        }]}
                        disabled={!cardsCount && !isOwner}
                        onClick={() => handlerLearnCards(packID, packName)}
                    >Learn</Button>
                </div>
            </TableCell>
        </TableRow>
    );
};
