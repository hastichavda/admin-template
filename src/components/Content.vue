<template>
  <div class="container">
    <div class="content">
      <router-view />
      <div class="row">
        <div class="col-xl-2 col-md-3 card-col1">
          <Card class="row-card">
            <div slot="header" class="card-h">
              <span class="fa-stack fa-3x">
                <i class="fa fa-circle fa-stack-2x icon-background1"></i>
                <i class="fa fa-eye fa-stack-1x"></i>
              </span>
            </div>
            <div slot="body" class="card-b">
              <h1 class="card-font">8,457</h1>
            </div>
            <div slot="footer" class="card-f">
              <p class="card-p">Daily Visits</p>
            </div>
          </Card>
        </div>
        <div class="col-xl-2 col-md-3 card-col1">
          <Card class="row-card">
            <div slot="header" class="card-h">
              <span class="fa-stack fa-3x">
                <i class="fa fa-circle fa-stack-2x icon-background2"></i>
                <i class="fa fa-shopping-cart fa-stack-1x"></i>
              </span>
            </div>
            <div slot="body" class="card-b">
              <h1 class="card-font">52,160</h1>
            </div>
            <div slot="footer" class="card-f">
              <p class="card-p">Sales</p>
            </div>
          </Card>
        </div>
        <div class="col-xl-2 col-md-3 card-col1">
          <Card class="row-card">
            <div slot="header" class="card-h">
              <span class="fa-stack fa-3x">
                <i class="fa fa-circle fa-stack-2x icon-background3"></i>
                <i class="fa fa-comments fa-stack-1x"></i>
              </span>
            </div>
            <div slot="body" class="card-b">
              <h1 class="card-font">15,823</h1>
            </div>
            <div slot="footer" class="card-f">
              <p class="card-p">Comments</p>
            </div>
          </Card>
        </div>
        <div class="col-xl-5 col-md-3 card-col1">
          <Card class="row-card">
            <div slot="header" class="card-h">
              <span class="fa-stack fa-3x">
                <i class="fa fa-circle fa-stack-2x icon-background4"></i>
                <i class="fa fa-users fa-stack-1x"></i>
              </span>
            </div>
            <div slot="body" class="card-b">
              <h1 class="card-font">36,752</h1>
            </div>
            <div slot="footer" class="card-f">
              <p class="card-p">No, of Visits</p>
            </div>
          </Card>
        </div>
      </div>
      <div class="row card-chart ">
        <div class="col-xl-9 col-md-5 chart-col1">
          <Card>
            <div slot="header">
              <p class="card-chart-p">Area Chart</p>
            </div>
            <div slot="body">
              <AreaChart
                :labels="[
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Satuerday'
                ]"
                :values="[50, 100, 150, 200]"
              >
              </AreaChart>
            </div>
          </Card>
        </div>
        <div class="col-xl-3 col-md-7 ">
          <Card>
            <div slot="header">
              <p class="card-chart-p">Line Chart</p>
            </div>
            <div slot="body">
              <LineChart
                :labels="[
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Satuerday'
                ]"
                :values="[50, 100, 150, 200]"
              >
              </LineChart>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AreaChart from "../components/AreaChart.vue";
import LineChart from "../components/LineChart.vue";
import Card from "../components/Card.vue";
export default {
  components: {
    AreaChart,
    LineChart,
    Card
  }
};
</script>

<style>
body {
  background: #e6e6e6;
}
.content {
  position: relative;
}
/* .circle {
  height: 25px;
  width: 30px;
  border-radius: 0 90px 90px 0;
  background: #d1cfcb;
}
.toggle {
  display: flex;
  flex-direction: column-reverse;
}
.toggle .c {
  padding: 5px;
  font-size: 15px;
  color: black;
} */
.cards {
  display: flex;
  position: absolute;
}
.icon-background1 {
  color: #2fd489;
}
.icon-background2 {
  color: #34ccdf;
}
.icon-background3 {
  color: #fe6e52;
}
.icon-background4 {
  color: #f9ab54;
}
.card {
  background: white;
}
.card-font {
  color: #8a8e8c;
}
.card-p {
  color: #676d6b;
  font-size: 15px;
  font-weight: bold;
}
.card-chart {
  margin-top: 2%;
}
.card-chart-p {
  font-size: 15px;
  font-weight: bold;
  padding: 5px 5px 5px 10px;
}

.chart-col1 {
  margin-bottom: 20px;
}
.card-h {
  padding: 5px 0 5px 10px;
}
.card-b {
  padding: 0 0 5px 15px;
}
.card-f {
  padding: 5px 0 10px 15px;
}
.card-col1 {
  margin-bottom: 20px;
}

@media (max-width: 1450px) {
  .content {
    width: 100%;
    margin-top: 10%;
  }
  .row-card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}
</style>
