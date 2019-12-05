import React, { Component } from "react";
import "../css/calculateInsurance.css";

class CalculateInsurance extends Component {
  render() {
    return (
      <div className="top">
        <div className="tile is-ancestor">
          <div className="tile is-verticla is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child">
                  <div className="columns">
                    <p className="column">เบี้ยประกันขอคุณ (จ่าย x ปี)</p>
                  </div>
                  <div className="columns">
                    <p className="control column">
                      <input
                        className="input"
                        type="text"
                        placeholder="NumberCal"
                      />
                    </p>
                    <p className="control column">
                      <label className="label">ต่อปี</label>
                    </p>
                  </div>
                  <div className="columns">
                    <p className="control column">
                      <label className="label"></label>
                    </p>
                    <p className="control column">
                      <input
                        className="input"
                        type="text"
                        placeholder="NumberCal"
                      />
                    </p>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box is-vertical-center">
                  <figure className="image is-64x64 has-image-centered">
                    <img src="https://bulma.io/images/placeholders/64x64.png" />
                  </figure>
                </article>
              </div>
            </div>
          </div>
          <div className="tile is-parent is-vertical">
            <article className="tile is-child">
              <div className="columns">
                <p className="control column is-10">
                  <input
                    className="input"
                    type="text"
                    placeholder="ชื่อแบบประกัน"
                  />
                </p>
              </div>
              <div className="columns">
                <p className="control column is-5">
                  <label className="label">ระยะเวลาจ่ายเบี้ย</label>
                </p>
                <p className="control column is-5">
                  <input
                    className="input"
                    type="text"
                    placeholder="(ระยะเวลาจ่ายเบี้ย)"
                  />
                </p>
                <p className="control column">
                  <label className="label">ปี</label>
                </p>
              </div>
              <div className="columns">
                <p className="control column is-5">
                  <label className="label">ระยะเวลาคุ้มครอง</label>
                </p>
                <p className="control column is-5">
                  <input
                    className="input"
                    type="text"
                    placeholder="(ระยะเวลาคุ้มครอง)"
                  />
                </p>
                <p className="control column">
                  <label className="label">ปี</label>
                </p>
              </div>
              <div className="columns">
                <p className="control column is-5">
                  <input
                    className="input"
                    type="text"
                    placeholder="(Category)"
                  />
                </p>
                <p className="control column is-5">
                  <input
                    className="input"
                    type="text"
                    placeholder="(แบบหลัก)"
                  />
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent"></div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-6">
            <article className="tile is-child has-text-centered">
              <label className="label">ผลประโยช์ที่ได้รับ</label>
            </article>
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-8">
            <article className="tile is-child">
              <label className="label">ความคุ้มครอง</label>
            </article>
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-8">
            <article className="tile is-child">
              <label className="label">ทุนประกัน</label>
            </article>
            <article className="tile is-child">
              <div className="columns">
                <p className="control column">
                  <input
                    className="input"
                    type="text"
                    placeholder="(ทุนประกัน)"
                  />
                </p>
                <p className="control column">
                  <label className="label">บาท</label>
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-8">
            <article className="tile is-child">
              <label className="label">เทียบความคุ้มครอง</label>
            </article>
            <article className="tile is-child">
              <div className="columns">
                <p className="control column">
                  <input
                    className="input"
                    type="text"
                    placeholder="(เบี้ยประกัน/ทุนประกัน)"
                  />
                </p>
                <p className="column"></p>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculateInsurance;
