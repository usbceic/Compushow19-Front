import * as React from 'react'
import { Grid, Card, CardActionArea, CardContent } from '@material-ui/core'

export default function Comments(props: any) {

    return (
        <Grid item xs={12} sm={6}
            style={{ paddingTop: props.comment.id % 2 == 0? '20px': '0'}}
        >
            <Card style={{ margin: '40px', maxWidth: '280px', maxHeight: '220px', borderRadius: '5px' }}>
                <CardActionArea style={{ margin: '0', padding: '0' }}>
                    <CardContent style={{ margin: '0', padding: '0' }}>
                        <div style={{ background: '#4c1a02', color: '#f9ecb7', padding: '10px', textAlign: 'center', fontSize: '20px', fontFamily: 'Hamster ' }}>
                            {props.comment.nominee.name}
                        </div>
                        <div style={{ padding: '10px', fontSize: '15px' }}>
                            {props.comment.comment}
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
} 