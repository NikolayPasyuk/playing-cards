import styles from './Profile.module.css'
import React from 'react';
import Button from '@mui/material/Button';
import {Navigate} from 'react-router-dom';
import {EditProfile} from './EditProfile/EditProfile';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PackTable} from '../PacksList/PackTable/PackTable';
import style from '../../pages/PacksList/PacksList.module.css';
import {
    fetchCardsPack,
    selectPack,
    setPackOwner,
    setPage,
    setPageCount,
    setSearchPackName
} from '../../../bll/reducers/pack-reducer';
import {PackCard} from '../../../api/pack-api';
import {useAppDispatch, useAppSelector} from '../../../bll/store';
import {logOut} from '../../../bll/reducers/app-reducer';
import {styleBtn} from '../../../styles/commonMui';
import SearchField from '../../common/SearchField/SearchField';
import {Pagination} from '../../common/Pagination/Pagination';
import {controlModalWindowAC} from '../../../bll';


const Profile = () => {
    const dispatch = useAppDispatch()

    const isAuth = useAppSelector<boolean>(state => state.login.isAuth)
    const avatar = useAppSelector<string | undefined>(state => state.login.data.avatar)
    const name = useAppSelector<string>(state => state.login.data.name)
    const maxSort = useAppSelector<number>(state => state.pack.maxSort)
    const minSort = useAppSelector<number>(state => state.pack.minSort)
    const packName = useAppSelector(selectPack).packName
    const pack = useAppSelector<PackCard[]>(state => state.pack.cardPacks)
    const sortBy = useAppSelector<string>(state => state.pack.sortBy)
    const order = useAppSelector<'desc' | 'asc'>(state => state.pack.order)
    const owner = useAppSelector<'all' | 'my'>(state => state.pack.packOwner)
    const cardsPacksTotalCount = useAppSelector<number>(state => state.pack.cardPacksTotalCount)
    const page = useAppSelector<number>(state => state.pack.page)
    const pageCount = useAppSelector<number>(state => state.pack.pageCount)
    const [editMode, setEditMode] = React.useState(false)


    const onClickChangeEditModeHandler = () => {
        setEditMode(!editMode)
    }

    const onClickLogOutHandler = () => {
        dispatch(logOut())
    }

    const searchByPackName = (search: string) => {
        dispatch(setSearchPackName(search))
    }

    const setPackPageCallback = (page: number) => {
        dispatch(setPage(page + 1));
    }
    const setPackPageCountCallback = (page: number) => {
        dispatch(setPageCount(page))
    }

    const openAddModalWindowHandler = () => {
        dispatch(controlModalWindowAC(true, 'ADD'))
    }

    React.useEffect(() => {
        isAuth && dispatch(setPackOwner('my'))
    }, [dispatch, isAuth])

    React.useEffect(() => {
        isAuth && dispatch(fetchCardsPack());
    }, [sortBy, order, minSort, maxSort, packName, pageCount, page])

    if (!isAuth) return <Navigate to={'/login'}/>

    return (
        <>
            {!editMode
                ? <div className={styles.profileContainer}>
                    <div className={styles.sidebar}>

                        <ProfileInfo avatar={avatar}
                                     name={name}
                                     editMode={editMode}
                                     onClickChangeEditModeHandler={onClickChangeEditModeHandler}/>

                        <div style={{textAlign: 'center', margin: '10px 0'}}>
                            <Button variant={'contained'}
                                    onClick={onClickLogOutHandler}>
                                Log out
                            </Button>
                        </div>
                    </div>

                    <div className={styles.content}>
                        <SearchField searchCallback={searchByPackName}
                                     placeholder={'Search'} initState={packName}/>

                        <div className={style.buttonPosition}>
                            <Button
                                sx={[styleBtn, {
                                    borderRadius: '4px',
                                    fontWeight: 'bold',
                                    margin: '0 0 14px 0',
                                    padding: '8px 16px 4px',
                                    color: '#2c2b3f',
                                    height: 'auto'
                                }]}
                                variant={'contained'}
                                onClick={openAddModalWindowHandler}
                            >
                                Add new Pack
                            </Button>
                        </div>

                        {pack.length === 0 && owner === 'my'
                            ? <div>You have no packs. Do you want to add?</div>
                            : <>
                                <PackTable pack={pack} sortBy={sortBy} order={order}/>

                                <Pagination page={page}
                                            pageCount={pageCount}
                                            cardsPacksTotalCount={cardsPacksTotalCount}
                                            setPageCallback={setPackPageCallback}
                                            setPageCountCallback={setPackPageCountCallback}
                                />
                            </>
                        }

                    </div>
                </div>

                : <EditProfile avatar={avatar}
                               name={name}
                               editMode={editMode}
                               onClickChangeEditModeHandler={onClickChangeEditModeHandler}
                />}
        </>
    );
};

export default Profile;