import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
})

const Page = () => {
    const classes = useStyles()
    const queues = useSelector(state => state.queues)

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Button variant="contained" color="secondary">
                        Load
                    </Button>
                </Grid>
                <Grid item xs={9}>
                    <TextField id="name-filter" label="Regex here" />
                </Grid>
                <Grid item xs={3}>
                    <Button varient="contained" color="primary">
                        Filter
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table
                            className={classes.table}
                            size="small"
                            aria-label="a table of queues">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Queue</TableCell>
                                    <TableCell align="right">vhost</TableCell>
                                    <TableCell align="right">Message</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {queues.map(q => (
                                    <TableRow key={q.id}>
                                        <TableCell>{q.name}</TableCell>
                                        <TableCell align="right">{q.vhost}</TableCell>
                                        <TableCell align="right">{q.messages}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    )
}

export default Page
