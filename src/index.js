module.exports = function check(str, bracketsConfig) {
    let br = [];
    for (k = 0; k < bracketsConfig.length; k++) {
        br.push(bracketsConfig[k][0]);
        br.push(bracketsConfig[k][1]);
    }
    let st = [];
    for (let i = 0; i < str.length; ++i) {
        let ch = str[i];
        let ind = br.indexOf(ch);
        if (ind >= 0) {
            if (ch == "|") {
                if (ch == st[st.length - 1]) {
                    let last_br = st.pop();
                } else {
                    st.push(ch);
                }
            } else if (ch == br[ind + 1]) {
                if (ch == st[st.length - 1]) {
                    let last_br = st.pop();
                } else {
                    st.push(ch);
                }
            } else if (ind & 1) {
                if (!st.length) return false;
                let last_br = st.pop();
                if (last_br != br[ind - 1]) return false;
            } else {
                st.push(ch);
            }
        }
    }
    return st.length == 0;
};
