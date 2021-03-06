import * as React from 'react';
import { getNannies, getAppointment } from '../../store/actions/nannies';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { SortIcon, FilterIcon } from './NannyListIcons';
import {
  Box,
  Button,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import ActionButton from '../../components/actionButton/ActionButton';
import styles from './assets/NannyList.module.scss';
import Pagination from '@mui/material/Pagination';
import ReactLoading from 'react-loading';

export default function NannyList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNannies());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAppointment());
  }, [dispatch]);

  const { loading, nannies } = useSelector((state) => state.nannies);

  const [page, setPage] = useState(1);
  const [showPage, setShowPage] = useState(false);

  const handlePage = (e) => {
    e.preventDefault();
    setPage(parseInt(e.target.textContent));
    setShowPage(true);
  };

  useEffect(() => {
    dispatch(getNannies(page));
  }, [dispatch, page, showPage]);

  return (
    <div className={styles.container}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ fontFamily: 'Nunito', fontWeight: '700' }} variant='h4'>
          Nanny List
        </Typography>
        <Box
          sx={{ display: 'flex', justifyContent: 'right', marginTop: '1rem', marginBottom: '1rem' }}
        >
          <Button
            variant='outlined'
            startIcon={<SortIcon />}
            sx={{
              color: 'black',
              borderColor: '#C1C1C2',
              borderRadius: '12px',
              textTransform: 'unset',
              width: '6.5rem',
              height: '3rem',
            }}
          >
            Sort
          </Button>
          <Button
            variant='outlined'
            startIcon={<FilterIcon />}
            sx={{
              color: 'black',
              borderColor: '#C1C1C2',
              borderRadius: '12px',
              textTransform: 'unset',
              width: '6.5rem',
              height: '3rem',
              marginLeft: '0.5rem',
            }}
          >
            Filter
          </Button>
        </Box>
        <TableContainer component={Paper} sx={{ borderRadius: '12px' }}>
          <Table aria-label='simple table' sx={{ fontFamily: 'Nunito' }}>
            <TableHead>
              <TableRow sx={{ fontFamily: 'Nunito' }}>
                <TableCell>Nanny's Name</TableCell>
                <TableCell>Nanny ID</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell align='center'>Number of Child</TableCell>
                <TableCell align='center'>Status</TableCell>
                <TableCell align='center'>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ fontFamily: 'Nunito' }}>
              {loading ? (
                <ReactLoading type={'spin'} color={'#10B278'} height={200} width={200} />
              ) : (
                nannies?.nannies?.map((item, index) => (
                  <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component='th' scope='row'>
                      {item.name}
                    </TableCell>
                    <TableCell>{item.nanny_id}</TableCell>
                    <TableCell>{item.phone_number}</TableCell>
                    <TableCell align='center'>{item.numberOfChild}</TableCell>
                    <TableCell align='center'>
                      <Typography
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: item.status === 'Active' ? '#10B278' : '#F67979',
                          color: 'white',
                          width: 'fitContent',
                          height: '35px',
                          borderRadius: '50px',
                        }}
                      >
                        {item.status}
                      </Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <ActionButton />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <div className={styles.paginationContainer}>
          <Pagination
            count={nannies?.pages}
            variant='outlined'
            shape='rounded'
            onChange={handlePage}
          />
        </div>
      </Box>
    </div>
  );
}
