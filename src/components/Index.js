import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = ({
    wrapper:{
        padding: "40px",
    },
    indexCard:{
        margin: "10px",
    },
    indexSpacing: {
        padding: "5px",
    },
    indexCardMainText: {
        textAlign: "left",
    }
})


class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            intro:[
                {
                    name: "Picture",
                    info: "You can get some picture urls from <b style='color:red'>instagram, tpl, mdpr, oricon</b>, ameblo, nogi46 & keya46, thetv, mantanweb, natalie, or get some live url from linelive and showroom.",
                    path: "/picture",
                },
                {
                    name: "Drama",
                    info: "You can get some japanese drama's download url from tvbt, subpig, fixsub.",
                    path: "/drama",
                },
                {
                    name: "Program",
                    info: "Just a simplified <a href='https://tv.yahoo.co.jp/' target='_blank'>Yahoo</a> tv program search.",
                    path: "/program",
                },
                {
                    name: "STchannel",
                    info: "You can get <a href='https://st-channel.jp/' target='_blank'>STchannel</a>'s video.",
                    path: "/stchannel",
                },
            ]
        }
    }
    render() {
        const intro = this.state.intro
        const { classes } = this.props
        const cardTmp = []
        cardTmp.push(
            <div key="index" className={classes.wrapper}>
            {intro.map((i, index) => (
                <Card key={"c" + index} className={classes.indexCard}>
                    <CardContent>
                        <Typography variant="headline" component="h2" className={classes.indexSpacing}>
                        {i.name}
                        </Typography>
                        <Typography className={classes.indexCardMainText} dangerouslySetInnerHTML = {{__html:i.info}} ></Typography>
                        <Typography component="p" className={classes.indexSpacing}>
                            <a href={i.path}><Button variant="outlined" size="small">Go to {i.name}</Button></a>
                        </Typography>
                    </CardContent>
                </Card>
            ))}
            </div>
        )
        return (
            <div>
                {cardTmp}
            </div>
        )
    }
}

IndexPage.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(IndexPage);