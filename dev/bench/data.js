window.BENCHMARK_DATA = {
  "lastUpdate": 1598387467430,
  "repoUrl": "https://github.com/osohq/oso",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "sam@osohq.com",
            "name": "Sam Scott",
            "username": "samscott89"
          },
          "committer": {
            "email": "sam@osohq.com",
            "name": "Sam Scott",
            "username": "samscott89"
          },
          "distinct": true,
          "id": "5539864d7cdd637d13fb20b46af2fd8f9a6c06d8",
          "message": "Make bench names readable.",
          "timestamp": "2020-08-25T15:41:36-04:00",
          "tree_id": "e5d6fb6c29e9d8666ad21ff1e24e80545187113b",
          "url": "https://github.com/osohq/oso/commit/5539864d7cdd637d13fb20b46af2fd8f9a6c06d8"
        },
        "date": 1598386140130,
        "tool": "cargo",
        "benches": [
          {
            "name": "unify_once",
            "value": 1610,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "unify_twice",
            "value": 4987,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "many_rules",
            "value": 136522,
            "range": "± 8201",
            "unit": "ns/iter"
          },
          {
            "name": "fib/5",
            "value": 815253,
            "range": "± 37653",
            "unit": "ns/iter"
          },
          {
            "name": "prime/3",
            "value": 29887,
            "range": "± 1666",
            "unit": "ns/iter"
          },
          {
            "name": "prime/23",
            "value": 29278,
            "range": "± 1931",
            "unit": "ns/iter"
          },
          {
            "name": "prime/43",
            "value": 29496,
            "range": "± 2152",
            "unit": "ns/iter"
          },
          {
            "name": "prime/83",
            "value": 29952,
            "range": "± 3562",
            "unit": "ns/iter"
          },
          {
            "name": "prime/255",
            "value": 27103,
            "range": "± 1946",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sam@osohq.com",
            "name": "Sam Scott",
            "username": "samscott89"
          },
          "committer": {
            "email": "sam@osohq.com",
            "name": "Sam Scott",
            "username": "samscott89"
          },
          "distinct": true,
          "id": "6af516f3d991e5f995c67e3867868ecfcf8ecf01",
          "message": "Test conditionally saving bench.",
          "timestamp": "2020-08-25T16:19:17-04:00",
          "tree_id": "656cb094005cfeb080434dc0eda0f60ae53f6477",
          "url": "https://github.com/osohq/oso/commit/6af516f3d991e5f995c67e3867868ecfcf8ecf01"
        },
        "date": 1598387466694,
        "tool": "cargo",
        "benches": [
          {
            "name": "unify_once",
            "value": 1547,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "unify_twice",
            "value": 4886,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "many_rules",
            "value": 143092,
            "range": "± 6239",
            "unit": "ns/iter"
          },
          {
            "name": "fib/5",
            "value": 744135,
            "range": "± 32078",
            "unit": "ns/iter"
          },
          {
            "name": "prime/3",
            "value": 31555,
            "range": "± 1457",
            "unit": "ns/iter"
          },
          {
            "name": "prime/23",
            "value": 31067,
            "range": "± 1604",
            "unit": "ns/iter"
          },
          {
            "name": "prime/43",
            "value": 31186,
            "range": "± 1494",
            "unit": "ns/iter"
          },
          {
            "name": "prime/83",
            "value": 31322,
            "range": "± 1713",
            "unit": "ns/iter"
          },
          {
            "name": "prime/255",
            "value": 28988,
            "range": "± 1913",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}