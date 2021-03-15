import styled from 'styled-components';

export const BodyContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    overflow: hidden;
`;

export const Menu = styled.menu`
    max-width: 310px;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    background: #212025;
    z-index: 10;
    @media(min-width:1201px){
        position: relative;
        margin-left: -310px;
        transition: margin-left .3s ease-in;
    }
    @media(max-width:1200px){
        position: fixed;
        top: 0;
        transition: left .3s ease-in;
        left: -310px
    }
    &.open{
        box-shadow: 3px 1px 5px -3px #fff;
        @media(min-width:1201px){
            margin-left: 0;
        }
        @media(max-width:1200px){
            left: 0;
        }  
        .bt-menu{
            background: #212025;
            box-shadow: 2px 2px 5px -3px #fff;
            span{
                position: absolute;
                background: #fd951f;
                width: 26px;
                bottom: 20px;
                transition: transform .3s;
                &:nth-child(1){
                    left: 11px;
                    transform: rotate(-45deg);
                }
                &:nth-child(2){ display: none; }
                &:nth-child(3){
                    right: 11px;
                    transform: rotate(45deg);
                }
            }
            &:hover{
                background: #212025;
                box-shadow: 2px 2px 5px -3px #fff;
                span{
                    &:nth-child(3){
                        max-width: unset;
                    }
                }
            }
        }
    }

    .bt-menu{
        position: absolute;
        top: 0;
        right: -50px;
        width: 50px;
        height: 45px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-between;
        background: #9D50BB;
        background: -webkit-linear-gradient(to left, #6E48AA, #9D50BB);
        background: linear-gradient(to left, #6E48AA, #9D50BB);
        border-radius: 0 5px 5px 0;
        span{
            width: 100%;
            max-width: 50px;
            height: 3px;
            background: #fff;
            transition: max-width .3s, transform .3s ease-in;
            border-radius: 5px;
        }
        &:hover{
            background: #212025;
            box-shadow: 1px 1px 4px -1px #fff;
            span{
                background: #fd951f;
                &:nth-child(2){
                    max-width: 20px;
                }
                &:nth-child(3){
                    max-width: 10px;
                }
            }
        }
    }

    .logo{
        width: 100%;
        text-align: center;
        padding: 25px 0;
        border-bottom: 3px solid #fff;
        img {
            max-width: 90%;
            filter: invert();
        }
    }

    .menus{
        display: flex;
        flex-direction: column;
        height: 100%;
        div{
            display: flex;
            flex-direction: column;
            align-items: stretch;
            height: 100%;
            a{
                &:nth-child(2){
                    border-bottom: 1px solid #fff;
                }
            }
        }
        a {
            font-size: 20px;
            color: #fff;
            text-decoration: none;
            width: 100%;
            padding: 22px 0 22px 30px;
            position: relative;
            span{
                position: relative;
                z-index: 1
            }
            &:last-of-type{
                border-top: 1px solid #fff;
            }
            &:after{
                content:'';
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                max-width: 0;
                background: #9D50BB;
                background: -webkit-linear-gradient(to left, #6E48AA, #9D50BB);
                background: linear-gradient(to left, #6E48AA, #9D50BB);
                transition: max-width .3s;
            }
            &:hover, &.select{
                &:after{
                    max-width: 330px
                }
            } 
            &.select{
                &:after{
                    background: #FF512F;
                    background: -webkit-linear-gradient(to right, #F09819, #FF512F);
                    background: linear-gradient(to right, #F09819, #FF512F);
                }
            }
        }
    }
`;


export const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    h1{
        color: #fff;
    }
    .content{
        display:flex;
        justify-content:flex-end;
        width: 100%;
        max-width: 60%;
        .searchContent{
            position: relative;
            z-index: 1;
            width: 50%;
            display: flex;
            align-items: stretch;

            input{
                background: #fff;
                border-radius: 5px 0 0 5px;
                position: relative;
                z-index: 1;
                border: unset;
                box-shadow: none;
                outline: none;
                padding: 8px;
                width: 100%
            }
            &:after{
                content: '';
                position: absolute;
                bottom: -5px;
                right: -5px;
                z-index: -1;
                border-radius: 5px;

                background: #9D50BB;
                background: -webkit-linear-gradient(to left, #6E48AA, #9D50BB);
                background: linear-gradient(to left, #6E48AA, #9D50BB);
                
                width: calc( 100% - 5px );
                height: calc( 100% - 5px );
            }
            .bt-search{
                background: #fff;
                border-radius: 0 5px 5px 0;
                width: 40px;
                padding: 8px;
                height: 100%;
                svg{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        
    }
`;

export const InfoContent = styled.div`
    height: 100vh;
    background: rgba(18,18,20,1);
    padding: 25px 8%;
    overflow: hidden auto;
    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    &::-webkit-scrollbar-thumb {
        background: #52c234;
        background: -webkit-linear-gradient(to bottom, #061700, #52c234);
        background: linear-gradient(to bottom, #061700, #52c234);
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

export const CardList = styled.ul`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const Card = styled.li`
    width: 100%;
    margin: 30px 0;
    position: relative;
    z-index: 1;
    div.content{
        padding: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: stretch;
        background-color: #212025;
        border-radius: 5px;
        color: #fff;
        box-shadow: 2px 2px 5px -3px #fff;
        z-index: 2;

        .bt-more-info{
            position:absolute;
            bottom: 20px;
            right: 20px;
            color: #52c234;
            cursor: pointer;
            text-decoration:underline;
        }

        .more-info{
            display: flex;
            flex-direction: column;
            width: 100%;
            max-height: 0;
            overflow: hidden;
            transition: all .3s ease-out;
            .description{
                display: block
            }
        }
    }


    &.show-info{
        .content{
            .bt-more-info{
                font-size: 0px;
                color: #f47230;
                &:after{
                    content: 'Ver menos';
                    color: #f47230;
                    font-size: 16px;
                }
            }
            .more-info{
                margin-top: 20px;
                max-height: 300px;
            }
        }
    }

    &:after{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: -5px;
        right: -5px;
        border-radius: 5px;
        z-index: -1;
        max-width: 0;
        max-height: 0;
        transition: all .3s ease-out;
    }
    &:hover{
        div{
            box-shadow:none;
        }
        &:after{
            background: #9D50BB;
            background: -webkit-linear-gradient(to left, #6E48AA, #9D50BB);
            background: linear-gradient(to left, #6E48AA, #9D50BB);
            max-height: calc( 100% - 10px );
            max-width: calc( 100% - 10px );
        }
    }

`;
