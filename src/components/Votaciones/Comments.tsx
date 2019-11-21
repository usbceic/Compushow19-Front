import * as React from 'react'
import { Grid, Card, CardActionArea, CardContent } from '@material-ui/core'

export default function Comments(props: any) {

    return (
        <Grid item xs={12} sm={6}
            style={{ paddingTop: props.id % 2 === 0 ? '25px' : '0px' }}
        >
            <Card style={{ margin: '0', padding: '0', maxWidth: '220px', maxHeight: '220px' }}>
                <CardActionArea style={{ margin: '0', padding: '0' }}>
                    <CardContent style={{ margin: '0', padding: '0' }}>
                        <div style={{ background: '#4c1a02', color: '#f9ecb7', padding: '10px' }}>
                            {props.comment.nominee.name}
                        </div>
                        <div style={{ padding: '10px' }}>
                            {props.comment.comment}
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}