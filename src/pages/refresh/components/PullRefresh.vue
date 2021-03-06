<template>
    <div class="pull-refresh" ref="pullF" :style="{height: pullHeight}">
		<div class="pull-info" :style="{height: tipHeight}" v-if="!refreshing">
			<img src="../../../img/refresh_arrow.png" :style="{transform:`rotate(${arrowDeg}deg)`,transition:transition}"/>
				<span>{{pullTip}}</span>
		</div>
		<div class="pull-info" :style="{height: tipHeight}" v-else>
			<img src="../../../img/loading.gif"/>
			<span>{{refreshTip}}</span>
		</div>
		<div class="pull-con" ref="pull" 
		@touchstart="touchstart" 
		@touchmove="touchmove" 
		@touchend="touchend" 
		:style="{transform:`translateY(${moveY}px)`,transition:transition}">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
    name: "pullRefresh",
    props: {
		refreshing: {
			type: Boolean,
			default: false
		},
		onRefresh: {
			type: Function,
			default: function() {}
		},
        tipHeight: {
            type: String,
            default: "50px"
        },
        pullHeight: {
            type: String,
            default: "auto"
        },
        pullTip: {
            type: String,
            default: "下拉即可刷新"
        },
        refreshTip: {
            type: String,
            default: "正在刷新"
        }
	},
    data() {
        return {
            clientY: 0,
			moveY: 0,
			disabled: false,
			arrowDeg: 0,
			transition: 'all 0.2s'
        }
    },
	computed: {
		getPullInfoHeight: function() {
			return parseFloat(getComputedStyle(document.querySelector(".pull-info")).height);
		} 
	},
    methods: {
		touchstart(e) {
			if(this.$refs.pullF.scrollTop > 0) {
				this.disabled = true;
			}
			else {
				this.transition = 'all 0s';
				this.clientY = e.touches[0].clientY;
			}
		},
		touchmove(e) {
			let moveY = e.touches[0].clientY - this.clientY;
			const infoHeight = this.getPullInfoHeight;
			const maxRange = infoHeight * 2;
			if(this.scrollTop>0) return ;//滚动条未到达顶端时，不触发计算
			if(!this.disabled && moveY >= 0) {
				e.preventDefault();
				this.moveY = moveY;
				this.moveY >= maxRange && (this.moveY = maxRange)
				this.arrowDeg = this.moveY < infoHeight ? 0 : this.moveY < maxRange ? (this.moveY - infoHeight) / infoHeight * 180 : 180;
			}
		},
		touchend() {
			const infoHeight = this.getPullInfoHeight;
			if(this.moveY >= infoHeight) {
				this.moveY = infoHeight;
				this.disabled = true;
				this.transition = "all 0.2s";
				this.onRefresh && this.onRefresh();
			}
			else {
				this.moveY = 0;
				this.disabled = false;
			}
		},
		handleScroll() {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			this.scrollTop = scrollTop;
		}
	},
	watch: {
		refreshing: function(nv, ov) {
			if(!nv && ov) {
				this.clientY = 0;
				this.moveY = 0;
				this.disabled = false;
				this.arrowDeg = 0;
                this.transition = "all 0.2s";
			}
			else if(nv && !ov) {
				this.moveY = this.getPullInfoHeight;
				this.disabled = true;
				this.arrowDeg = 180;
			}
 		}
	},
	//touchstart和touchmove的实时滚动高度获取外部外部滚动条
	mounted () {
		window.addEventListener('scroll', this.handleScroll)
	},
}
</script>

<style scoped>
    .pull-con {
        height: 100%;
    }
    .pull-info {
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        -webkit-justify-content: center;
        align-items: center;
        -webkit-align-items: center;
        position: absolute;
        top: 0;
        width: 100%;
    }
    .pull-info img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
    .pull-info span {
        color: #333333;
        font-size: 14px;
    }
</style>
