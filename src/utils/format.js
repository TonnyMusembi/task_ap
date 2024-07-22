export function formatDate(date) {
  const d = new Date(date);

  const month = ("0" + (d.getMonth() + 1)).slice(-2);
  const day = ("0" + d.getDate()).slice(-2);
  const year = d.getFullYear();
  const hours = ("0" + d.getHours()).slice(-2);

  return [day, month, year].join("/") + " " + hours + ":00";
}

// third task

function solution(S, C) {
  let total_cost = 0;
  let n = S.length;

  for (let i = 0; i < n - 1; i++) {
    if (S[i] === S[i + 1]) {
      if (C[i] < C[i + 1]) {
        total_cost += C[i];
      } else {
        total_cost += C[i + 1];
        C[i + 1] = C[i];
      }
    }
  }

  return total_cost;
}
console.log(solution("abdbd", [1, 2, 2, 4, 5, 6]));
