import React from "react";
import "../style/navbar.css";
import { Link } from 'react-router-dom';

const Cards = ()=>{
    return(
        <>
        <div className="container">
        <div className="row">
            <div className="col-12 col-lg-4 col-md-12">
                <div className="card-box rounded-2 text-center p-5 shadow">
                    <img src="../img/voter_edu.jfif" alt=""/>
                    <Link to="/voterEducation" class="my-3 fw-normal card_title">Voter's Education</Link>
                    <p className="mb-5">Voter's education plays a vital role in strengthening democratic societies. It
                        encompasses the efforts to inform and educate eligible voters about their rights,
                        responsibilities, and the electoral process.</p>


                </div>
            </div>

            <div className="col-12 col-lg-4 col-md-12">
                <div className="card-box round/ed-2 text-center p-5 shadow">
                    <img src="../img/politicalparties_3748891731.jpg" alt=""/>
                    <a href="#" className="my-3 fw-normal card_title">Candidates/Political Parties</a>
                    <p className="mb-5">Candidates and political parties are integral components of democratic systems,
                        shaping the landscape of governance and representing the diverse interests of the public.</p>


                </div>
            </div>

            <div className="col-12 col-lg-4 col-md-12">
                <div className="card-box rounded-2 text-center p-5 shadow">
                    <img src="../img/voter.jpeg" alt=""/>
                    <Link to="/signup" className="my-3 fw-normal card_title">Register to Vote</Link>
                    <p className="mb-5">Voter registration is the process through which individuals provide their essential
                        information to electoral authorities, allowing them to verify eligibility and ensure accurate
                        representation in the electoral system.</p>


                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row w25">
            <div className="col-12 col-lg-4 col-md-12">
                <div className="card-box rounded-2 text-center p-5 shadow">
                    <img src="../img/voter_edu.jfif" alt=""/>
                    <a href=".//register_an_election.html" className="my-3 fw-normal card_title">Register an Election</a>
                    <p className="mb-5">Voter's education plays a vital role in strengthening democratic societies. It
                        encompasses the efforts to inform and educate eligible voters about their rights,
                        responsibilities, and the electoral process.</p>


                </div>
            </div>

            <div className="col-12 col-lg-4 col-md-12">
                <div className="card-box rounded-2 text-center p-5 shadow">
                    <img src="../img/politicalparties_3748891731.jpg" alt=""/>
                    <a href="#" className="my-3 fw-normal card_title">Candidates/Political Parties</a>
                    <p className="mb-5">Candidates and political parties are integral components of democratic systems,
                        shaping the landscape of governance and representing the diverse interests of the public.</p>


                </div>
            </div>

            <div className="col-12 col-lg-4 col-md-12">
                <div className="card-box rounded-2 text-center p-5 shadow">
                    <img src="../img/voter.jpeg" alt=""/>
                    <a href="#" className="my-3 fw-normal card_title">Register to Vote</a>
                    <p className="mb-5">Voter registration is the process through which individuals provide their essential
                        information to electoral authorities, allowing them to verify eligibility and ensure accurate
                        representation in the electoral system.</p>


                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Cards;