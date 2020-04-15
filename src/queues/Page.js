import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const queue = (id, name, vhost, messages) => {
    return { id, name, vhost, messages }
}

const queues = [
    queue(1, 'something-added', '/', 42),
    queue(2, 'something-removed', '/', 24),
    queue(3, 'something-changed', '/private', 10)
]

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
})

const Page = () => {
    const classes = useStyles()

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a table of queues">
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
        </>
    )
}

export default Page
